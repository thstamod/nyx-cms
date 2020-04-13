import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '../../../utils/test-utils/redux-provider';
import { initialState, userReducer } from '../../../redux/reducers/userReducer';
import AuthPage from '../AuthPage';

test('Auth page Page renders', () => {
  const { asFragment } = render(<AuthPage />, initialState, userReducer);

  expect(asFragment()).toMatchSnapshot();
});
