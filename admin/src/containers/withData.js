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
        handleClick={handleClick}
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
