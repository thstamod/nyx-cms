import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import withMainNavigation from '../../containers/withMainNavigation';


const GET_DOCUMENT_TYPES = gql`
  query dt {
    getDocunemtTypes{
      _id
    }
  }
`;

const ContentPage = () => {
  const { loading, data, error } = useQuery(GET_DOCUMENT_TYPES, { errorPolicy: 'all' });

  const handleError = (err) => err && (
    <div> Bad: {err.graphQLErrors.map(({ message }, i) => (
      <span key={i}>{message}</span>
    ))}
    </div>
  );
  if (loading) {
    return (<div>Loading</div>);
  }
  if (data) {
    console.log(data);
  }
  return (
    <div>
      <h1>Content page</h1>
      {handleError(error)}
    </div>
  );
};

export default withMainNavigation(ContentPage);
