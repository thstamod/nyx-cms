import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import {
  render,
  cleanup,
  waitFor,
  fireEvent,
  screen,
} from '@testing-library/react';
import { ContentPageProvider } from '../../../context/ContentPageContext';
import ListView from '../ListView';
import { sidebar } from '../../../../__mocks__/_pages/_contentPage';

afterEach(cleanup);

test('ListView renders', () => {
  const { asFragment } = render(
    <ContentPageProvider>
      <ListView data={sidebar.data} />
    </ContentPageProvider>
  );

  expect(asFragment()).toMatchSnapshot();
});

test('with no data', () => {
  const { getByTestId } = render(
    <ContentPageProvider>
      <ListView data={null} />
    </ContentPageProvider>
  );

  expect(getByTestId('content-list-menu')).toBeEmpty();
});

test('open submenu on click', () => {
  const { getByText } = render(
    <ContentPageProvider>
      <ListView data={sidebar.data} />
    </ContentPageProvider>
  );

  fireEvent.click(screen.getByText('depth_0+'));

  expect(getByText('depth_11')).toBeVisible();
});

test('submenu is hide initially', async () => {
  const { getByText } = render(
    <ContentPageProvider>
      <ListView data={sidebar.data} />
    </ContentPageProvider>
  );

  const el = getByText('depth_11');

  expect(el).not.toBeVisible();
});

test('submenu opens and closes', async () => {
  const { getByText } = render(
    <ContentPageProvider>
      <ListView data={sidebar.data} />
    </ContentPageProvider>
  );

  const el = screen.getByText('depth_0+');
  el.click();
  expect(getByText('depth_11')).toBeVisible();
  el.click();
  waitFor(() => expect(getByText('depth_11')).not.toBeVisible());
});
