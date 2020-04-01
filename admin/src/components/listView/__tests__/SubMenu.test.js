import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, cleanup } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import theme from '../../../theme';
import SubMenu from '../SubMenu';
import { data } from '../../../../__mocks__/_pages/_contentPage';

afterEach(cleanup);

test('SubMenu renders', () => {
  const { asFragment } = render(
    <ThemeProvider theme={theme}>
      <SubMenu data={data.documentTypes[10].descendants} />
    </ThemeProvider>
  );

  expect(asFragment()).toMatchSnapshot();
});
