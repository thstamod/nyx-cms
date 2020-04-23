import React, { createContext, useContext } from 'react';
import { userReducer, initialState } from '../redux/reducers/userReducer';
import useEnhancedReducer from '../hooks/useEnhancedReducer';
import logger from '../middlewares/customLogger';

export const AppContext = createContext();

export function useAppState() {
  return useContext(AppContext);
}

export function AppStateProvider({ children }) {
  const middlewares = [logger];
  const store = useEnhancedReducer(userReducer, initialState, middlewares);

  return <AppContext.Provider value={store}>{children}</AppContext.Provider>;
}
