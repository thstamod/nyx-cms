import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import SettingsPage from '../SettingsPage';

test('Settings page Page renders', () => {
  const { asFragment } = render(<SettingsPage />);

  expect(asFragment()).toMatchSnapshot();
});
