import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import { Col, Row } from 'react-bootstrap';
// import withMainNavigation from '../../containers/withMainNavigation';
import Sidebar from '../../components/Navigation/sidebar/Sidebar';

const GET_DOCUMENT_TYPES = gql`
  query dt {
    documentTypes: getDocunemtTypes {
      _id
      name
      descendants {
        documentType {
          name
        }
      }
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
    // console.log(data);
  }

  const showSidebar = (d) => <Sidebar data={d} />;
  return (
    <Row>
      <Col xs={3}>{showSidebar(data)}</Col>
      <Col xs={9}>
        <h1>Content page</h1>

        {handleError(error)}
      </Col>
    </Row>
  );
};

export default ContentPage;
