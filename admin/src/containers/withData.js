import React from 'react';
import { useLazyQuery, useQuery } from '@apollo/react-hooks';
// import LOGIN_QUERY from '../graphql/loginQuery';

const withData = ({ query, lazy }) => (Component) => (props) => {
  if (lazy) {
    const [handleClick, { data, error }] = useLazyQuery(query, {
      errorPolicy: 'all',
    });
    return (
      <Component
        queryHandleClick={handleClick}
        // queryLoading={loading}
        queryData={data}
        queryError={error}
        {...props}
      />
    );
  }
  const { loading, data, error } = useQuery(query, {
    errorPolicy: 'all',
  });
  return (
    <Component
      queryLoading={loading}
      queryData={data}
      queryError={error}
      {...props}
    />
  );
};

export default withData;
