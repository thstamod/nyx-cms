import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, cleanup } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import theme from '../../../theme';
import ListViewItem from '../ListViewItem';
import { data } from '../../../../__mocks__/_pages/_contentPage';

afterEach(cleanup);

test('ListViewItem renders', () => {
  const { asFragment } = render(
    <ThemeProvider theme={theme}>
      <ListViewItem data={data.documentTypes[10]} />
    </ThemeProvider>
  );

  expect(asFragment()).toMatchSnapshot();
});

// test('with no data', () => {
//   const { getByTestId } = render(
//     <ThemeProvider theme={theme}>
//       <ListViewItem data={null} />
//     </ThemeProvider>
//   );

//   expect(getByTestId('content-list-menu-item')).toBeEmpty();
// });
