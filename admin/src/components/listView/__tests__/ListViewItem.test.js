import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import {
  render,
  cleanup,
  screen,
  waitFor,
  fireEvent,
} from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { ContentPageProvider } from '../../../context/ContentPageContext';
import theme from '../../../theme';
import ListViewItem from '../ListViewItem';
import { sidebar } from '../../../../__mocks__/_pages/_contentPage';

afterEach(cleanup);

test('ListViewItem renders', () => {
  const { asFragment } = render(
    <ContentPageProvider>
      <ThemeProvider theme={theme}>
        <ListViewItem data={sidebar.data.documentTypes[0]} />
      </ThemeProvider>
    </ContentPageProvider>
  );

  expect(asFragment()).toMatchSnapshot();
});
