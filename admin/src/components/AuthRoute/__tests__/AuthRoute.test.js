import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, waitFor, cleanup } from '@testing-library/react';
import { MemoryRouter, Route, Switch } from 'react-router-dom';
import { AppContext } from '../../../context/AppContext';
import AuthRoute from '../AuthRoute';
import { initialState } from '../../../state/reducers/userReducer';

afterEach(cleanup);

const renderMock = (state, dispatch) =>
  render(
    <AppContext.Provider value={[state, dispatch]}>
      <MemoryRouter initialEntries={['/content']}>
        <Switch>
          <AuthRoute
            path="/content"
            component={() => <div>Content Page</div>}
          />
          <Route path="/auth" component={() => <div>Auth Page </div>} />
        </Switch>
      </MemoryRouter>
    </AppContext.Provider>
  );

test('Auth route with initial state', async () => {
  const mockedDispatch = jest.fn();

  const { getByText } = renderMock(initialState, mockedDispatch);

  await waitFor(() => expect(getByText('Auth Page')).toBeInTheDocument());
});

test('Auth route with valid state', async () => {
  const state = {
    isLoggedIn: true,
    token:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1ZTcxNDczZjE4MTIxYzJmZjI0YzQwZWYiLCJlbWFpbCI6InRlc3RAbWFpbC5jb20iLCJpYXQiOjE1ODc4MDkxOTUsImV4cCI6MTU4NzgxMjc5NX0.2Rnz5e8-YwcvNrqcS1C8WGUddjMjygn9yJutfWdNC_Q',
    tokenExpiration: 1651253522000,
  };

  const mockedDispatch = jest.fn();

  const { getByText } = renderMock(state, mockedDispatch);

  await waitFor(() => expect(getByText('Content Page')).toBeInTheDocument());
});

test('Auth route with invalid state', async () => {
  const state = {
    isLoggedIn: true,
    token:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1ZTcxNDczZjE4MTIxYzJmZjI0YzQwZWYiLCJlbWFpbCI6InRlc3RAbWFpbC5jb20iLCJpYXQiOjE1ODc4MDkxOTUsImV4cCI6MTU4NzgxMjc5NX0.2Rnz5e8-YwcvNrqcS1C8WGUddjMjygn9yJutfWdNC_Q',
    tokenExpiration: 1588181522000,
  };

  const mockedDispatch = jest.fn();

  const { getByText } = renderMock(state, mockedDispatch);

  await waitFor(() => expect(getByText('Auth Page')).toBeInTheDocument());
});
