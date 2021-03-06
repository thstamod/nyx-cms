/* eslint-disable no-unused-vars */
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
import styles from './style.module.scss';

const MainContent = ({
  queryData,
  queryLoading,
  queryError,
  queryHandleClick,
  handleMutation,
  mutationData,
  mutationError,
  mutationLoading,
}) => {
  const [
    {
      id,
      name,
      creator,
      createdAt,
      updatedAt,
      inheritFrom,
      parentDocumentType,
      privileges,
      descendants,
      datatypes,
    },
    dispatch,
  ] = useContentPageState();

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
      const dataTypesValues = {};
      const docTypeData = {
        name: queryData.documentType.name,
        parentDocumentType: queryData.documentType.parentDocumentType,
        privileges: queryData.documentType.privileges,
        descendants: queryData.documentType.descendants,
        creator: queryData.documentType.creator,
        createdAt: queryData.documentType.createdAt,
        updatedAt: queryData.documentType.updatedAt,
      };
      queryData.documentType.compilation.forEach((dt) => {
        const { type, _id } = dt.dataType;
        const { title, options, value, description, compilationItemId } = dt;
        const sid = Symbol('id');
        dataTypesValues[sid] = {
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
      dispatch(setAllDataTypes({ docTypeData, dataTypesValues }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [queryData]);

  // TODO: based on id, dispatch action for changing the specific doc type data
  const handleDocDataChanges = (target) => {
    console.log('handleDocDataChanges -> e', target.value);
    console.log('handleDocDataChanges -> e', target.id);
  };

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
    <div className={styles.mainContent}>
      <h1>Content page</h1>
      {name && (
        <>
          <label htmlFor="docTypeName">Name</label>
          <input
            id="docTypeName"
            type="text"
            onChange={(e) => handleDocDataChanges(e.target)}
            value={name}
          />
        </>
      )}
      {creator && creator.name}
      {createdAt && createdAt}
      {updatedAt && updatedAt}
      {renderDataTypes(datatypes)}
      {handleError(queryError)}
      {handleError(mutationError)}
      {mutationLoading && <div> Saving...</div>}
      {mutationData && <div> Save successful</div>}
      {datatypes && (
        <button type="button" onClick={handleSave}>
          SAVE
        </button>
      )}
    </div>
  );
};

export default compose(
  withData({ query: GET_DOCTYPE_WITH_DATATYPES, lazy: true }),
  withMutation({ query: UPDATE_DOCUMENT_TYPE })
)(MainContent);
