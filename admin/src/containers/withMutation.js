import React from 'react';
import { useMutation } from '@apollo/react-hooks';
// import LOGIN_QUERY from '../graphql/loginQuery';

const withMutation = ({ query }) => (Component) => (props) => {
  const [handleMutation, { loading, data, error }] = useMutation(query, {
    errorPolicy: 'all',
  });
  return (
    <Component
      mutationLoading={loading}
      mutationData={data}
      mutationError={error}
      handleMutation={handleMutation}
      {...props}
    />
  );
};

export default withMutation;
