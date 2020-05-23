/* eslint-disable no-restricted-syntax */
import React, { useEffect } from 'react';
import withData from '../../containers/withData';
import withMutation from '../../containers/withMutation';
import GET_DOCTYPE_WITH_DATATYPES from '../../graphql/queries/getDocumentTypeWithDataTypes';
import UPDATE_DOCUMENT_TYPE from '../../graphql/mutations/updateDocumentType';
import { useContentPageState } from '../../context/ContentPageContext';
import { setAllDataTypes } from '../../state/actions/contentPageActions';
import dataTypesSupportedList from '../dataTypes';
import { compose } from '../../utils/common';

const MainPanel = ({
  queryData,
  queryLoading,
  queryError,
  queryHandleClick,
  handleMutation,
  mutationData,
  mutationError,
  mutationLoading,
}) => {
  const [{ id, datatypes }, dispatch] = useContentPageState();

  useEffect(() => {
    if (id) {
      queryHandleClick({
        variables: {
          _id: id,
        },
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const handleError = (err) =>
    err && (
      <div>
        Bad:
        {err.graphQLErrors.map(({ message }, i) => (
          <span style={{ color: 'red' }} key={i}>
            {message}
          </span>
        ))}
      </div>
    );
  // TODO: add the rest of the documentType's properties
  const handleSave = () => {
    const compilation = [];
    if (datatypes) {
      const dt = Object.getOwnPropertySymbols(datatypes);
      dt.forEach((s) => {
        const tmp = { ...datatypes[s] };
        delete tmp.type;
        delete tmp.sid;
        compilation.push(tmp);
      });
    }
    handleMutation({ variables: { _id: id, compilation } });
  };

  useEffect(() => {
    if (queryData && queryData.documentType.compilation.length > 0) {
      const dataTypesVals = {};
      queryData.documentType.compilation.forEach((dt) => {
        const { type, _id } = dt.dataType;
        const { title, options, value, description, compilationItemId } = dt;
        const sid = Symbol('id');
        dataTypesVals[sid] = {
          title,
          options,
          value,
          description,
          type,
          dataTypeId: _id,
          sid,
          compilationItemId,
        };
      });
      dispatch(setAllDataTypes(dataTypesVals));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [queryData]);

  const renderDataTypes = (_data) => {
    const returned = [];
    if (!_data) {
      return null;
    }
    const dt = Object.getOwnPropertySymbols(_data);
    dt.forEach((s, index) => {
      // eslint-disable-next-line no-prototype-builtins
      if (!_data[s].hasOwnProperty('toBeDeleted')) {
        const {
          title,
          options,
          value,
          type,
          description,
          dataTypeId,
          sid,
          compilationItemId,
        } = _data[s];
        const TypedComponent = dataTypesSupportedList[type.toLowerCase()];
        const props = {
          dataTypeId,
          title,
          description,
          options,
          value,
          type,
          sid,
          compilationItemId,
        };

        returned.push(
          <TypedComponent {...props} dispatch={dispatch} key={index} />
        );
      }
    });
    return returned;
  };

  if (queryLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <h1>Content page</h1>
      {queryData && queryData.documentType.name}
      {queryData && renderDataTypes(datatypes)}
      {handleError(queryError)}
      {handleError(mutationError)}
      {mutationLoading && <div> Saving...</div>}
      {mutationData && <div> Save successful</div>}
      <button type="button" onClick={handleSave}>
        SAVE
      </button>
    </>
  );
};

export default compose(
  withData({ query: GET_DOCTYPE_WITH_DATATYPES, lazy: true }),
  withMutation({ query: UPDATE_DOCUMENT_TYPE })
)(MainPanel);
