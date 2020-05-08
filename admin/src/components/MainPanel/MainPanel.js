/* eslint-disable react/destructuring-assignment */
import React, { useEffect } from 'react';
import withData from '../../containers/withData';
import GET_DOCTYPE_WITH_DATATYPES from '../../graphql/getDocumentTypeWithDataTypes';
import { useContentPageState } from '../../context/ContentPageContext';

const MainPanel = (props) => {
  const [{ id }] = useContentPageState();

  useEffect(() => {
    if (id) {
      props.handleSubmit({
        variables: {
          _id: id,
        },
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  if (props.data) {
    console.log(props.data.documentType);
  }

  // eslint-disable-next-line no-unused-vars
  const handleError = (err) =>
    err && (
      <div>
        Bad:
        {err.graphQLErrors.map(({ message }, i) => (
          <span key={i}>{message}</span>
        ))}
      </div>
    );

  if (props.loading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <h1>Content page</h1>
      {props.data && props.data.documentType.name}
    </>
  );
};

export default withData({ query: GET_DOCTYPE_WITH_DATATYPES, lazy: true })(
  MainPanel
);
