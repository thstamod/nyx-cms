import React, { createContext, useContext } from 'react';
import { userReducer, initialState } from '../state/reducers/userReducer';
import useEnhancedReducer from '../hooks/useEnhancedReducer';
import logger from '../middlewares/customLogger';
import useSessionState from '../hooks/useSessionState';
import { GET_FROM_SESSION_STATE } from '../state/actions/actionTypes';

export const AppContext = createContext();

export function useAppState() {
  return useContext(AppContext);
}

export function AppStateProvider({ children }) {
  const middlewares = [logger];
  const store = useEnhancedReducer(userReducer, initialState, middlewares);
  const dispatch = store[1];

  useSessionState('user', dispatch, initialState, GET_FROM_SESSION_STATE);

  return <AppContext.Provider value={store}>{children}</AppContext.Provider>;
}
