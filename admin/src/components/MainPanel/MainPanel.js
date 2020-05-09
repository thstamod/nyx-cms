import React, { useEffect } from 'react';
import withData from '../../containers/withData';
import GET_DOCTYPE_WITH_DATATYPES from '../../graphql/getDocumentTypeWithDataTypes';
import { useContentPageState } from '../../context/ContentPageContext';
import dataTypes from '../dataTypes';

const MainPanel = ({ data, loading, error, handleClick }) => {
  const [{ id }] = useContentPageState();

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

  if (data) {
    // console.log(data.documentType);
  }

  const renderDataTypes = (_data) =>
    _data.compilation &&
    _data.compilation.map((dataType) => {
      console.log(dataType);
      const { type, name } = dataType.dataType;
      const TypedComponent = dataTypes[type.toLowerCase()];
      return <TypedComponent name={name} key={Math.random()} />;
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
