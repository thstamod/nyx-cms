import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, cleanup } from '@testing-library/react';

import { ContentPageProvider } from '../../../context/ContentPageContext';

import ListViewItem from '../ListViewItem';
import { sidebar } from '../../../../__mocks__/_pages/_contentPage';

afterEach(cleanup);

test('ListViewItem renders', () => {
  const { asFragment } = render(
    <ContentPageProvider>
      <ListViewItem data={sidebar.data.documentTypes[0]} />
    </ContentPageProvider>
  );

  expect(asFragment()).toMatchSnapshot();
});
