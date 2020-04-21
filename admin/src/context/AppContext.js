import React, { createContext, useContext, useReducer } from 'react';
import { userReducer, initialState } from '../redux/reducers/userReducer';

export const AppContext = createContext();

export function useAppState() {
  return useContext(AppContext);
}

const m1 = (store) => (next) => (action) => {
  const result = next(action);
  console.log('IN -----> M1', action.type);
  console.log('m1', store);
  return result;
};

const compose = (...funcs) => (input) =>
  funcs.reduceRight((res, func) => func(res), input);

const middlewareDispatch = (store, stateDispatch, middlewares = []) =>
  compose(...middlewares.map((m) => m(store)))(stateDispatch);

export function AppStateProvider({ children }) {
  // eslint-disable-next-line prefer-const
  let [state, dispatch] = useReducer(userReducer, initialState);
  const middlewares = [m1];

  dispatch = middlewareDispatch(state, dispatch, middlewares);
  const ext = [state, dispatch];
  return <AppContext.Provider value={ext}>{children}</AppContext.Provider>;
}
