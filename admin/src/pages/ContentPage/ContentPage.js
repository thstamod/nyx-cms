import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import { Col, Row } from 'react-bootstrap';
import withMainNavigation from '../../containers/withMainNavigation';
import ListView from '../../components/Navigation/ListView';

const GET_DOCUMENT_TYPES = gql`
  query dt {
    documentTypes: getDocunemtTypes {
      _id
      name
    }
  }
`;

const ContentPage = () => {
  const { loading, data, error } = useQuery(GET_DOCUMENT_TYPES, {
    errorPolicy: 'all',
  });

  const handleError = (err) =>
    err && (
      <div>
        Bad:
        {err.graphQLErrors.map(({ message }, i) => (
          <span key={i}>{message}</span>
        ))}
      </div>
    );
  if (loading) {
    return <div>Loading</div>;
  }
  if (data) {
    console.log(data);
  }

  const showListView = (d) => <ListView data={d} />;
  return (
    <Row>
      <Col xs={3}>{showListView(data)}</Col>
      <Col>
        <h1>Content page</h1>

        {handleError(error)}
      </Col>
    </Row>
  );
};

export default withMainNavigation(ContentPage);
