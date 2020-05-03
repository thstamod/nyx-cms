/* eslint-disable react/destructuring-assignment */
import React from 'react';
import Sidebar from '../../components/Navigation/sidebar/Sidebar';
import GET_DOCUMENT_TYPES from '../../graphql/getDocumentTypesQuery';
import withData from '../../containers/withData';
import { MainContent } from './ContentPage.styles.tw';
import MainPanel from '../../components/MainPanel/MainPanel';
import { ContentPageProvider } from '../../context/ContentPageContext';

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

  return (
    <ContentPageProvider>
      <Sidebar data={props.data} />
      <MainContent>
        <MainPanel />
        {handleError(props.error)}
      </MainContent>
    </ContentPageProvider>
  );
};

export default withData({ query: GET_DOCUMENT_TYPES, lazy: false })(
  ContentPage
);
