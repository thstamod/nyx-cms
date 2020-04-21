import React, { createContext, useContext } from 'react';
import { userReducer, initialState } from '../redux/reducers/userReducer';
import useEnhancedReducer from '../hooks/useEnhancedReducer';

export const AppContext = createContext();

export function useAppState() {
  return useContext(AppContext);
}

// eslint-disable-next-line no-unused-vars
const m1 = (store) => (next) => (action) => {
  // eslint-disable-next-line no-unused-expressions
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
  const result = next(action);
  return result;
};
const m2 = (store) => (next) => (action) => {
  console.log('Previous state', store.getState());
  const result = next(action);
  console.log('Updated state', store.getState());
  return result;
};

export function AppStateProvider({ children }) {
  const middlewares = [m1, m2];
  const store = useEnhancedReducer(userReducer, initialState, middlewares);

  return <AppContext.Provider value={store}>{children}</AppContext.Provider>;
}
