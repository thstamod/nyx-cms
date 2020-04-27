import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, cleanup, screen, waitFor } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import theme from '../../../theme';
import ListViewItem from '../ListViewItem';
import data from '../../../../__mocks__/_pages/_contentPage';

afterEach(cleanup);

test('ListViewItem renders', () => {
  const { asFragment } = render(
    <ThemeProvider theme={theme}>
      <ListViewItem data={data.data.documentTypes[0]} />
    </ThemeProvider>
  );

  expect(asFragment()).toMatchSnapshot();
});

test('open submenu on click', () => {
  const { getByText } = render(
    <ThemeProvider theme={theme}>
      <ListViewItem data={data.data.documentTypes[0]} />
    </ThemeProvider>
  );

  // fireEvent.click(screen.getByText('depth_0+'));
  const el = screen.getByText('depth_0+');
  el.click();
  expect(getByText('depth_11')).toBeVisible();
});

test('submenu is hide initially', () => {
  const { getByText } = render(
    <ThemeProvider theme={theme}>
      <ListViewItem data={data.data.documentTypes[0]} />
    </ThemeProvider>
  );

  expect(getByText('depth_11')).not.toBeVisible();
});

test('submenu opens and closes', async () => {
  const { getByText } = render(
    <ThemeProvider theme={theme}>
      <ListViewItem data={data.data.documentTypes[0]} />
    </ThemeProvider>
  );

  const el = screen.getByText('depth_0+');
  el.click();
  expect(getByText('depth_11')).toBeVisible();
  el.click();
  waitFor(() => expect(getByText('depth_11')).not.toBeVisible());
});
