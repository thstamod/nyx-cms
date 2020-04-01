import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import styled from 'styled-components';
import { Col, Row } from 'react-bootstrap';
import Sidebar from '../../components/Navigation/sidebar/Sidebar';
import GET_DOCUMENT_TYPES from './query';

const FullRow = styled(Row)`
  height: 100%;
  margin-right: 0;
  margin-left: 0;
`;
const FullCol = styled(Col)`
  height: 100%;
  padding-left: 0;
  padding-right: 0;
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
    return <div>Loading...</div>;
  }
  if (data) {
    console.log(data);
  }

  const showSidebar = (d) => <Sidebar data={d} />;
  return (
    <FullRow>
      <FullCol xs={3} md={2}>
        {showSidebar(data)}
      </FullCol>
      <FullCol style={{ overflow: 'auto' }} xs={9} md={10}>
        <h1>Content page</h1>

        {handleError(error)}
      </FullCol>
    </FullRow>
  );
};

export default ContentPage;
