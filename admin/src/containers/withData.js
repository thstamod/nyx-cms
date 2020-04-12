import React from 'react';
import { useLazyQuery, useQuery } from '@apollo/react-hooks';
// import LOGIN_QUERY from '../graphql/loginQuery';

const withData = ({ query, lazy }) => (Component) => (props) => {
  // console.log(props);
  if (lazy) {
    const [handleSubmit, { data, error }] = useLazyQuery(query, {
      errorPolicy: 'all',
    });
    return (
      <Component
        handleSubmit={handleSubmit}
        data={data}
        error={error}
        {...props}
      />
    );
  }
  const { loading, data, error } = useQuery(query, {
    errorPolicy: 'all',
  });
  return <Component loading={loading} data={data} error={error} {...props} />;
};

export default withData;
