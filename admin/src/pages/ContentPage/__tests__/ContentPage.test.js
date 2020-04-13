import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, cleanup, waitFor } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { MockedProvider } from '@apollo/react-testing';
import theme from '../../../theme';
import ContentPage from '../ContentPage';
import GET_DOCUMENT_TYPES from '../../../graphql/getDocumentTypesQuery';
import data from '../../../../__mocks__/_pages/_contentPage';

afterEach(cleanup);

const mocks = [
  {
    request: {
      query: GET_DOCUMENT_TYPES,
    },
    result: {
      data,
    },
  },
];

test('Content Page renders', () => {
  const { asFragment } = render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <ThemeProvider theme={theme}>
        <ContentPage />
      </ThemeProvider>
    </MockedProvider>
  );

  expect(asFragment()).toMatchSnapshot();
});

it('should render loading state initially', () => {
  const { getByText } = render(
    <MockedProvider mocks={[]} addTypename={false}>
      <ThemeProvider theme={theme}>
        <ContentPage />
      </ThemeProvider>
    </MockedProvider>
  );

  const loading = getByText(/Loading.../i);
  expect(loading).toHaveTextContent('Loading...');
});

test('Content Page has header and sidebar', async () => {
  const { getByTestId } = render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <ThemeProvider theme={theme}>
        <ContentPage />
      </ThemeProvider>
    </MockedProvider>
  );
  await waitFor(() => expect(getByTestId('sidebar')).toBeInTheDocument());
});
