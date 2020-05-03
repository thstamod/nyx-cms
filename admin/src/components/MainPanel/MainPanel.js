import React from 'react';
import { useContentPageState } from '../../context/ContentPageContext';

const MainPanel = () => {
  const [{ id }] = useContentPageState();
  return (
    <>
      <h1>Content page</h1>
      {id}
    </>
  );
};

export default MainPanel;
