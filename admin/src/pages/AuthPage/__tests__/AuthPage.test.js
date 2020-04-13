import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import AuthPage from '../AuthPage';

test('Auth page Page renders', () => {
  const { asFragment } = render(<AuthPage />);

  expect(asFragment()).toMatchSnapshot();
});
