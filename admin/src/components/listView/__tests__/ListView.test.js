import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, cleanup } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import theme from '../../../theme';
import ListView from '../ListView';
import { data } from '../../../../__mocks__/_pages/_contentPage';

afterEach(cleanup);

test('ListView renders', () => {
  const { asFragment } = render(
    <ThemeProvider theme={theme}>
      <ListView data={data} />
    </ThemeProvider>
  );

  expect(asFragment()).toMatchSnapshot();
});

test('with no data', () => {
  const { getByTestId } = render(
    <ThemeProvider theme={theme}>
      <ListView data={null} />
    </ThemeProvider>
  );

  expect(getByTestId('content-list-menu')).toBeEmpty();
});