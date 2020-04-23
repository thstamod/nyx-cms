import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { AppStateProvider } from '../../../context/AppContext';
import App from '../App';

test('App renders', () => {
  const { asFragment } = render(
    <AppStateProvider>
      <App />
    </AppStateProvider>
  );

  expect(asFragment()).toMatchSnapshot();
});
