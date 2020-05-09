/* eslint-disable react/destructuring-assignment */
import React from 'react';
import Sidebar from '../../components/Navigation/sidebar/Sidebar';
import GET_DOCUMENT_TYPES from '../../graphql/getDocumentTypesQuery';
import withData from '../../containers/withData';
import { MainContent } from './ContentPage.styles.tw';
import MainPanel from '../../components/MainPanel/MainPanel';
import { ContentPageProvider } from '../../context/ContentPageContext';

const ContentPage = ({ data, loading, error }) => {
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
    // console.log(props.data);
  }

  return (
    <ContentPageProvider>
      <Sidebar data={data} />
      <MainContent>
        <MainPanel />
        {handleError(error)}
      </MainContent>
    </ContentPageProvider>
  );
};

export default withData({ query: GET_DOCUMENT_TYPES, lazy: false })(
  ContentPage
);
