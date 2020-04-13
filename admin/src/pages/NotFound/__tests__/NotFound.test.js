import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import NotFound from '../NotFound';

test('404 page Page renders', () => {
  const { asFragment } = render(<NotFound />);

  expect(asFragment()).toMatchSnapshot();
});
