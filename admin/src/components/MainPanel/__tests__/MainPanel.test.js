import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, cleanup, screen, waitFor } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { ContentPageProvider } from '../../../context/ContentPageContext';
import theme from '../../../theme';
import MainPanel from '../MainPanel';
import { panel } from '../../../../__mocks__/_pages/_contentPage';

afterEach(cleanup);

test('MainPanel renders', () => {
  const { asFragment } = render(
    <ContentPageProvider>
      <ThemeProvider theme={theme}>
        <MainPanel data={panel.data} />
      </ThemeProvider>
    </ContentPageProvider>
  );

  expect(asFragment()).toMatchSnapshot();
});

// test('MainPanel no data', () => {
//   const { getByText } = render(
//     <ContentPageProvider>
//       <ThemeProvider theme={theme}>
//         <MainPanel data={null} />
//       </ThemeProvider>
//     </ContentPageProvider>
//   );

//   // fireEvent.click(screen.getByText('depth_0+'));
//   const el = screen.getByText('depth_0+');
//   el.click();
//   expect(getByText('depth_11')).toBeVisible();
// });

// test('MainPanel render Text box', () => {
//   const { getByText } = render(
//     <ContentPageProvider>
//       <ThemeProvider theme={theme}>
//         <MainPanel data={panel.data.documentTypes[0]} />
//       </ThemeProvider>
//     </ContentPageProvider>
//   );

//   expect(getByText('depth_11')).not.toBeVisible();
// });
