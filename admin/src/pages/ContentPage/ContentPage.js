/* eslint-disable react/destructuring-assignment */
import React from 'react';
import Sidebar from '../../components/Navigation/sidebar/Sidebar';
import GET_DOCUMENT_TYPES from '../../graphql/queries/getDocumentTypesQuery';
import withData from '../../containers/withData';
import { MainContent } from './ContentPage.styles.tw';
import MainPanel from '../../components/MainPanel/MainPanel';
import { ContentPageProvider } from '../../context/ContentPageContext';

const ContentPage = ({ queryData, queryLoading, queryError }) => {
  const handleError = (err) =>
    err && (
      <div>
        Bad:
        {err.graphQLErrors.map(({ message }, i) => (
          <span key={i}>{message}</span>
        ))}
      </div>
    );
  if (queryLoading) {
    return <div>Loading...</div>;
  }
  if (queryData) {
    // console.log(props.data);
  }

  return (
    <ContentPageProvider>
      <Sidebar data={queryData} />
      <MainContent>
        <MainPanel />
        {handleError(queryError)}
      </MainContent>
    </ContentPageProvider>
  );
};

export default withData({ query: GET_DOCUMENT_TYPES, lazy: false })(
  ContentPage
);
