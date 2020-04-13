import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import UsersPage from '../UserPage';

test('Users page Page renders', () => {
  const { asFragment } = render(<UsersPage />);

  expect(asFragment()).toMatchSnapshot();
});
