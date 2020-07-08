/* eslint-disable react/destructuring-assignment */
import React from 'react';
import Sidebar from '../../components/Navigation/sidebar/Sidebar';
import GET_DOCUMENT_TYPES from '../../graphql/queries/getDocumentTypesQuery';
import withData from '../../containers/withData';
import MainPanel from '../../components/MainPanel/MainPanel';
import { ContentPageProvider } from '../../context/ContentPageContext';
import styles from './style.module.scss';

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
      <div className={styles.mainContent}>
        <MainPanel />
        {handleError(queryError)}
        <div className={styles.text}>test</div>
      </div>

    </ContentPageProvider>
  );
};

export default withData({ query: GET_DOCUMENT_TYPES, lazy: false })(
  ContentPage
);
