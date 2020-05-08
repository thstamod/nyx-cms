import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, cleanup, screen, waitFor } from '@testing-library/react';
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

test('open submenu on click', () => {
  const { getByText } = render(
    <ContentPageProvider>
      <ThemeProvider theme={theme}>
        <ListViewItem data={sidebar.data.documentTypes[0]} />
      </ThemeProvider>
    </ContentPageProvider>
  );

  // fireEvent.click(screen.getByText('depth_0+'));
  const el = screen.getByText('depth_0+');
  el.click();
  expect(getByText('depth_11')).toBeVisible();
});

test('submenu is hide initially', () => {
  const { getByText } = render(
    <ContentPageProvider>
      <ThemeProvider theme={theme}>
        <ListViewItem data={sidebar.data.documentTypes[0]} />
      </ThemeProvider>
    </ContentPageProvider>
  );

  expect(getByText('depth_11')).not.toBeVisible();
});

test('submenu opens and closes', async () => {
  const { getByText } = render(
    <ContentPageProvider>
      <ThemeProvider theme={theme}>
        <ListViewItem data={sidebar.data.documentTypes[0]} />
      </ThemeProvider>
    </ContentPageProvider>
  );

  const el = screen.getByText('depth_0+');
  el.click();
  expect(getByText('depth_11')).toBeVisible();
  el.click();
  waitFor(() => expect(getByText('depth_11')).not.toBeVisible());
});
