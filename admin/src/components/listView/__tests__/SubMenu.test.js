import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, cleanup, fireEvent, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import theme from '../../../theme';
import SubMenu from '../SubMenu';
import { data } from '../../../../__mocks__/_pages/_contentPage';

afterEach(cleanup);

test('SubMenu renders', () => {
  const { asFragment } = render(
    <ThemeProvider theme={theme}>
      <SubMenu data={data.documentTypes[14].descendants} />
    </ThemeProvider>
  );

  expect(asFragment()).toMatchSnapshot();
});

test('open submenu renders', () => {
  const { getByText } = render(
    <ThemeProvider theme={theme}>
      <SubMenu data={data.documentTypes[14].descendants} />
    </ThemeProvider>
  );

  fireEvent.click(screen.getByText('depth3+'));
  expect(getByText('depth2+')).toBeVisible();
});
