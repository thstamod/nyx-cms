import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, cleanup, screen, waitFor } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { MockedProvider } from '@apollo/react-testing';
import { ContentPageProvider } from '../../../context/ContentPageContext';
import theme from '../../../theme';
import MainPanel from '../MainPanel';
import { panel } from '../../../../__mocks__/_pages/_contentPage';

afterEach(cleanup);

test('MainPanel renders', () => {
  const { asFragment } = render(
    <ContentPageProvider>
      <MockedProvider mocks={[]} addTypename={false}>
        <ThemeProvider theme={theme}>
          <MainPanel data={panel.data} />
        </ThemeProvider>
      </MockedProvider>
    </ContentPageProvider>
  );

  expect(asFragment()).toMatchSnapshot();
});
