import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from '../../../redux/reducers/index';
import App from '../App';

function renderWithRedux(
  ui,
  { initialState, store = createStore(reducer, initialState) } = {}
) {
  return {
    ...render(<Provider store={store}>{ui}</Provider>),
    store,
  };
}

test('App renders', () => {
  const { asFragment } = renderWithRedux(<App />);

  expect(asFragment()).toMatchSnapshot();
});
