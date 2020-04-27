import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, waitFor, cleanup } from '@testing-library/react';
import { AppContext } from '../../../context/AppContext';
import App from '../App';
import { initialState } from '../../../state/reducers/userReducer';

afterEach(cleanup);

function renderWithProvider(store) {
  return render(
    <AppContext.Provider value={[store]}>
      <App />
    </AppContext.Provider>
  );
}

test('App renders', () => {
  const { asFragment } = renderWithProvider(initialState);

  expect(asFragment()).toMatchSnapshot();
});

test('App initial state', async () => {
  const { getByText } = renderWithProvider(initialState);

  waitFor(() => expect(getByText(/^Submit/)).toBeInTheDocument());
});

test('App logged in state', async () => {
  const state = {
    isLoggedIn: true,
    token:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1ZTcxNDczZjE4MTIxYzJmZjI0YzQwZWYiLCJlbWFpbCI6InRlc3RAbWFpbC5jb20iLCJpYXQiOjE1ODc4MDkxOTUsImV4cCI6MTU4NzgxMjc5NX0.2Rnz5e8-YwcvNrqcS1C8WGUddjMjygn9yJutfWdNC_Q',
    tokenExpiration: 1587812795962,
  };

  const { getByTestId } = renderWithProvider(state);
  waitFor(() => expect(getByTestId('main-container')).toBeInTheDocument());
});
