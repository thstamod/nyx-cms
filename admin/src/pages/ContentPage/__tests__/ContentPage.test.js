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
import { MockedProvider } from '@apollo/react-testing';
import { act } from 'react-dom/test-utils';
import theme from '../../../theme';
import ContentPage from '../ContentPage';
import GET_DOCUMENT_TYPES from '../../../graphql/queries/getDocumentTypesQuery';
import GET_DOCTYPE_WITH_DATATYPES from '../../../graphql/queries/getDocumentTypeWithDataTypes';
import UPDATE_DOCUMENT_TYPE from '../../../graphql/mutations/updateDocumentType';
import { sidebar, panel } from '../../../../__mocks__/_pages/_contentPage';

afterEach(cleanup);
const successMutation = {
  data: {
    updateDocumentType: {
      _id: '5ec164316043b80d6104e686',
    },
  },
};

const mocks = [
  {
    request: {
      query: GET_DOCUMENT_TYPES,
    },
    result: () => sidebar,
  },
  {
    request: {
      query: GET_DOCTYPE_WITH_DATATYPES,
      variables: {
        _id: '5e98743e707dfc01d6ce173e',
      },
    },
    result: () => panel,
  },
  {
    request: {
      query: UPDATE_DOCUMENT_TYPE,
      variables: {
        _id: '5e98743e707dfc01d6ce173e',
        compilation: [
          {
            value: { val: 'new value' },
            options: null,
            title: 'title2',
            dataTypeId: '5e7658d052a8500c640f3b91',
            compilationItemId: 'ba4ce241-9bcd-4135-9edc-ddcef273b20f',
            description: null,
          },
          {
            title: 'title2_1',
            options: null,
            value: { val: 'I am a Title2_1!!' },
            description: null,
            dataTypeId: '5e7658d052a8500c640f3b91',
            compilationItemId: '5fa907d1-be20-4605-801d-7094f266db29',
          },
        ],
      },
    },
    result: () => successMutation,
  },
  {
    request: {
      query: UPDATE_DOCUMENT_TYPE,
      variables: {
        _id: '5e98743e707dfc01d6ce173e',
        compilation: [
          {
            value: { val: 'I am a Title2!!' },
            options: null,
            title: 'title2',
            dataTypeId: '5e7658d052a8500c640f3b91',
            compilationItemId: 'ba4ce241-9bcd-4135-9edc-ddcef273b20f',
            description: null,
            toBeDeleted: true,
          },
          {
            title: 'title2_1',
            options: null,
            value: { val: 'I am a Title2_1!!' },
            description: null,
            dataTypeId: '5e7658d052a8500c640f3b91',
            compilationItemId: '5fa907d1-be20-4605-801d-7094f266db29',
          },
        ],
      },
    },
    result: () => successMutation,
  },
];

test('Content Page renders', () => {
  const { asFragment } = render(
    <MockedProvider mocks={mocks}>
      <ThemeProvider theme={theme}>
        <ContentPage />
      </ThemeProvider>
    </MockedProvider>
  );

  expect(asFragment()).toMatchSnapshot();
});

it('should render loading state initially', () => {
  const { getByText } = render(
    <MockedProvider mocks={[]}>
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
    <MockedProvider mocks={mocks}>
      <ThemeProvider
        theme={theme}
        addTypename={false}
        defaultOptions={{
          watchQuery: { fetchPolicy: 'no-cache' },
          query: { fetchPolicy: 'no-cache' },
        }}
      >
        <ContentPage />
      </ThemeProvider>
    </MockedProvider>
  );
  await waitFor(() => expect(getByTestId('sidebar')).toBeInTheDocument());
});

test('click on doc type', async () => {
  const { getByText } = render(
    <MockedProvider
      mocks={mocks}
      addTypename={false}
      defaultOptions={{
        watchQuery: { fetchPolicy: 'no-cache' },
        query: { fetchPolicy: 'no-cache' },
      }}
    >
      <ThemeProvider theme={theme}>
        <ContentPage />
      </ThemeProvider>
    </MockedProvider>
  );

  await waitFor(() => expect(getByText('depth0_no_child')).toBeInTheDocument());
  fireEvent.click(getByText('depth0_no_child'));

  await waitFor(() =>
    expect(screen.getByDisplayValue(/I am a Title2!!/i)).toBeInTheDocument()
  );
  const input = screen.getByDisplayValue(/I am a Title2!!/i);

  fireEvent.change(input, {
    target: { value: 'new value' },
  });
  fireEvent.click(getByText('SAVE'));

  await waitFor(() =>
    expect(getByText(/Save successful/i)).toBeInTheDocument()
  );
});

test('remove data type', async () => {
  const { getByText, getAllByText } = render(
    <MockedProvider
      mocks={mocks}
      addTypename={false}
      defaultOptions={{
        watchQuery: { fetchPolicy: 'no-cache' },
        query: { fetchPolicy: 'no-cache' },
      }}
    >
      <ThemeProvider theme={theme}>
        <ContentPage />
      </ThemeProvider>
    </MockedProvider>
  );

  await waitFor(() => expect(getByText('depth0_no_child')).toBeInTheDocument());
  fireEvent.click(getByText('depth0_no_child'));

  await waitFor(() =>
    expect(screen.getByDisplayValue(/I am a Title2!!/i)).toBeInTheDocument()
  );

  fireEvent.click(getAllByText('Remove')[0]);
  fireEvent.click(getByText('SAVE'));

  await waitFor(() =>
    expect(getByText(/Save successful/i)).toBeInTheDocument()
  );
});
