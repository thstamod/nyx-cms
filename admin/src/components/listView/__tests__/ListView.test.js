import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, cleanup } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import theme from '../../../theme';
import { ContentPageProvider } from '../../../context/ContentPageContext';
import ListView from '../ListView';
import { sidebar } from '../../../../__mocks__/_pages/_contentPage';

afterEach(cleanup);

test('ListView renders', () => {
  const { asFragment } = render(
    <ContentPageProvider>
      <ThemeProvider theme={theme}>
        <ListView data={sidebar.data} />
      </ThemeProvider>
    </ContentPageProvider>
  );

  expect(asFragment()).toMatchSnapshot();
});

test('with no data', () => {
  const { getByTestId } = render(
    <ContentPageProvider>
      <ThemeProvider theme={theme}>
        <ListView data={null} />
      </ThemeProvider>
    </ContentPageProvider>
  );

  expect(getByTestId('content-list-menu')).toBeEmpty();
});
