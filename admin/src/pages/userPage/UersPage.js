import React from 'react';
import gql from 'graphql-tag';
import { useLazyQuery } from '@apollo/react-hooks';
import withMainNavigation from '../../containers/withMainNavigation';


const GET_DOCUMENT_TYPES = gql`
  query dt {
    docunemtTypes{
      _id
    }
  }
`;

const UsersPage = () => {
  const [handleSubmit, { data, error }] = useLazyQuery(GET_DOCUMENT_TYPES, { errorPolicy: 'all' });

  const handleError = (err) => err && (
    <div> Bad: {err.graphQLErrors.map(({ message }, i) => (
      <span key={i}>{message}</span>
    ))}
    </div>
  );

  if (data) {
    console.log(data);
  }
  return (
    <div>
      <h1>Users page</h1>
      {handleError(error)}
      <button
        type="button"
        onClick={() => handleSubmit()}
      >Get data
      </button>
    </div>
  );
};

export default withMainNavigation(UsersPage);
