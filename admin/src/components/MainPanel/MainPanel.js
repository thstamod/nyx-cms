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

const MainPanel = ({ data, loading, error, handleClick, handleMutation }) => {
  const [{ id, datatypes }, dispatch] = useContentPageState();

  useEffect(() => {
    if (id) {
      handleClick({
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

  const handleSave = () => {
    const compilation = [];
    if (datatypes) {
      // eslint-disable-next-line guard-for-in
      for (const key in datatypes) {
        const tmp = { ...datatypes[key] };
        delete tmp.type;
        compilation.push(tmp);
      }
    }
    handleMutation({ variables: { _id: id, compilation } });
  };

  useEffect(() => {
    if (data && data.documentType.compilation.length > 0) {
      const dataTypesVals = {};
      data.documentType.compilation.forEach((dt) => {
        console.log(dt);
        const { type, _id } = dt.dataType;
        const { title, options, value, description } = dt;
        dataTypesVals[dt.dataType._id] = {
          title,
          options,
          value,
          description,
          type,
          dataTypeId: _id,
        };
      });
      dispatch(setAllDataTypes(dataTypesVals));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const renderDataTypes = (_data) => {
    const returned = [];
    // eslint-disable-next-line guard-for-in
    for (const key in _data) {
      // eslint-disable-next-line no-prototype-builtins
      if (!_data[key].hasOwnProperty('toBeDeleted')) {
        const { title, options, value, type, description, dataTypeId } = _data[
          key
        ];
        const TypedComponent = dataTypesSupportedList[type.toLowerCase()];
        const props = {
          dataTypeId,
          title,
          description,
          options,
          value,
          type,
        };
        console.log('renderDataTypes -> props', props);

        returned.push(<TypedComponent {...props} key={dataTypeId} />);
      }
    }
    return returned;
  };

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <h1>Content page</h1>
      {data && data.documentType.name}
      {data && renderDataTypes(datatypes)}
      {handleError(error)}
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
