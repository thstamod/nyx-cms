import React, { createContext, useContext } from 'react';
import {
  initialState,
  contentPageReducer,
} from '../state/reducers/contentPageReducer';
import useEnhancedReducer from '../hooks/useEnhancedReducer';
import logger from '../middlewares/customLogger';

export const ContentPageContext = createContext(null);

export function useContentPageState() {
  return useContext(ContentPageContext);
}

export function ContentPageProvider({ children }) {
  const middlewares = [logger];
  const store = useEnhancedReducer(
    contentPageReducer,
    initialState,
    middlewares
  );

  return (
    <ContentPageContext.Provider value={store}>
      {children}
    </ContentPageContext.Provider>
  );
}
