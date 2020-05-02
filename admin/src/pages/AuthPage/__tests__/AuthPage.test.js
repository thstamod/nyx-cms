import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, waitFor, cleanup, fireEvent } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { MockedProvider } from '@apollo/react-testing';
import { MemoryRouter, Switch, Route } from 'react-router-dom';
import LOGIN from '../../../graphql/loginQuery';
import { AppStateProvider } from '../../../context/AppContext';
import theme from '../../../theme';
import data from '../../../../__mocks__/_pages/_login';
import AuthPage from '../AuthPage';
import App from '../../../components/App/App';

afterEach(cleanup);

const mocks = [
  {
    request: {
      query: LOGIN,
      variables: { email: 'test@mail.com', password: '1234' },
    },
    result: data,
  },
];

test('Auth page Page renders', () => {
  const { asFragment } = render(
    <AppStateProvider>
      <MockedProvider mocks={[]} addTypename={false}>
        <ThemeProvider theme={theme}>
          <AuthPage />
        </ThemeProvider>
      </MockedProvider>
    </AppStateProvider>
  );

  expect(asFragment()).toMatchSnapshot();
});
test('Auth initial state', async () => {
  const { getByText } = render(
    <AppStateProvider>
      <MockedProvider mocks={[]} addTypename={false}>
        <ThemeProvider theme={theme}>
          <AuthPage />
        </ThemeProvider>
      </MockedProvider>
    </AppStateProvider>
  );
  waitFor(() => expect(getByText(/^Submit/)).toBeInTheDocument());
});

test('Auth page logged successfully', async () => {
  const { getByText, getByLabelText } = render(
    <AppStateProvider>
      <MockedProvider mocks={mocks} addTypename={false}>
        <MemoryRouter initialEntries={['/auth']}>
          <Switch>
            <Route path="/auth" component={AuthPage} />
            <Route path="/content" component={() => <div>Content Page</div>} />
          </Switch>
        </MemoryRouter>
      </MockedProvider>
    </AppStateProvider>
  );

  fireEvent.change(getByLabelText(/email/i), {
    target: { value: 'test@mail.com' },
  });
  fireEvent.change(getByLabelText(/password/i), {
    target: { value: '1234' },
  });

  fireEvent.click(getByText('Submit'));
  await waitFor(() => expect(getByText('Content Page')).toBeInTheDocument());
});

test('Auth page logged unsuccessfully', async () => {
  const { getByText, getByLabelText } = render(
    <AppStateProvider>
      <MockedProvider mocks={mocks} addTypename={false}>
        <MemoryRouter initialEntries={['/auth']}>
          <Switch>
            <Route path="/auth" component={AuthPage} />
            <Route path="/content" component={() => <div>Content Page</div>} />
          </Switch>
        </MemoryRouter>
      </MockedProvider>
    </AppStateProvider>
  );

  fireEvent.change(getByLabelText(/email/i), {
    target: { value: 'test@mail.com' },
  });
  fireEvent.change(getByLabelText(/password/i), {
    target: { value: '12345' },
  });

  fireEvent.click(getByText('Submit'));
  await waitFor(() => expect(getByText('Submit')).toBeInTheDocument());
});
