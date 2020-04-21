/* eslint-disable prefer-spread */
import { useState } from 'react';

const compose = (...funcs) => (input) =>
  funcs.reduceRight((res, func) => func(res), input);

const enhancedDispatch = (store, dispatch, middlewares) =>
  compose(...middlewares.map((m) => m(store)))(dispatch);

export default (reducer, initialState, middlewares = []) => {
  const [state, setState] = useState(initialState);

  let returnedState = { ...state };
  const dispatch = (action) => {
    returnedState = reducer(state, action);
    setState(returnedState);
  };

  const store = {
    getState: () => returnedState,
  };

  store.dispatch = enhancedDispatch(store, dispatch, middlewares);
  return [returnedState, store.dispatch];
};
