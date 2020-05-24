import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import {
  render,
  cleanup,
  waitFor,
  fireEvent,
  screen,
} from '@testing-library/react';
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

test('open submenu on click', () => {
  const { getByText } = render(
    <ContentPageProvider>
      <ThemeProvider theme={theme}>
        <ListView data={sidebar.data} />
      </ThemeProvider>
    </ContentPageProvider>
  );

  fireEvent.click(screen.getByText('depth_0+'));
  // const el = screen.getByText('depth_0+');
  // console.log(el);
  // el.click();
  expect(getByText('depth_11')).toBeVisible();
});

test('submenu is hide initially', () => {
  const { getByText } = render(
    <ContentPageProvider>
      <ThemeProvider theme={theme}>
        <ListView data={sidebar.data} />
      </ThemeProvider>
    </ContentPageProvider>
  );

  expect(getByText('depth_11')).not.toBeVisible();
});

test('submenu opens and closes', async () => {
  const { getByText } = render(
    <ContentPageProvider>
      <ThemeProvider theme={theme}>
        <ListView data={sidebar.data} />
      </ThemeProvider>
    </ContentPageProvider>
  );

  const el = screen.getByText('depth_0+');
  el.click();
  expect(getByText('depth_11')).toBeVisible();
  el.click();
  waitFor(() => expect(getByText('depth_11')).not.toBeVisible());
});
