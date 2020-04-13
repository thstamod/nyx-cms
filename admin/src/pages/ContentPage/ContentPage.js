/* eslint-disable react/destructuring-assignment */
import React from 'react';
import styled from 'styled-components';
import { Col, Row } from 'react-bootstrap';
import Sidebar from '../../components/Navigation/sidebar/Sidebar';
import GET_DOCUMENT_TYPES from '../../graphql/getDocumentTypesQuery';
import withData from '../../containers/withData';

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

const ContentPage = (props) => {
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
  if (props.data) {
    // console.log(props.data);
  }

  const showSidebar = (d) => <Sidebar data={d} />;
  return (
    <FullRow>
      <FullCol xs={3} md={2}>
        {showSidebar(props.data)}
      </FullCol>
      <FullCol style={{ overflow: 'auto' }} xs={9} md={10}>
        <h1>Content page</h1>

        {handleError(props.error)}
      </FullCol>
    </FullRow>
  );
};

export default withData({ query: GET_DOCUMENT_TYPES, lazy: false })(
  ContentPage
);
