import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { AppStateProvider } from '../../../context/AppContext';

import AuthPage from '../AuthPage';

test('Auth page Page renders', () => {
  const { asFragment } = render(
    <AppStateProvider>
      <AuthPage />
    </AppStateProvider>
  );

  expect(asFragment()).toMatchSnapshot();
});
