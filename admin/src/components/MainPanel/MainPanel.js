import React, { useEffect } from 'react';
import withData from '../../containers/withData';
import GET_DOCTYPE_WITH_DATATYPES from '../../graphql/getDocumentTypeWithDataTypes';
import { useContentPageState } from '../../context/ContentPageContext';
import { setAllDataTypes } from '../../state/actions/contentPageActions';
import dataTypes from '../dataTypes';

const MainPanel = ({ data, loading, error, handleClick }) => {
  const [{ id }, dispatch] = useContentPageState();

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
          <span key={i}>{message}</span>
        ))}
      </div>
    );

  useEffect(() => {
    if (data && data.documentType.compilation.length > 0) {
      const dataTypesVals = {};
      data.documentType.compilation.forEach((dt) => {
        // console.log(dt);
        const { title, options, value } = dt;
        dataTypesVals[dt.dataType._id] = {
          title,
          options,
          value,
        };
      });
      dispatch(setAllDataTypes(dataTypesVals));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  if (data) {
    //  console.log(data);
  }

  const renderDataTypes = (_data) =>
    _data.compilation &&
    _data.compilation.map((dataType) => {
      const { title, options, value } = dataType;
      const { type, _id } = dataType.dataType;
      const TypedComponent = dataTypes[type.toLowerCase()];
      const props = {
        _id,
        title,
        options,
        value,
      };
      return <TypedComponent {...props} key={_id} />;
    });

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <h1>Content page</h1>
      {data && data.documentType.name}
      {data && renderDataTypes(data.documentType)}
      {handleError(error)}
    </>
  );
};

export default withData({ query: GET_DOCTYPE_WITH_DATATYPES, lazy: true })(
  MainPanel
);
