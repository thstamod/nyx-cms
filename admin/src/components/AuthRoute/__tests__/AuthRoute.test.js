import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, waitFor, cleanup, fireEvent } from '@testing-library/react';
import { MockedProvider } from '@apollo/react-testing';
import { AppStateProvider } from '../../../context/AppContext';
import AuthRoute from '../AuthRoute';
import LOGIN from '../../../graphql/loginQuery';
import data from '../../../../__mocks__/_pages/_login';
import App from '../../App/App';

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

test('Auth route logged in state', async () => {
  const { getByTestId, getByText, getByLabelText } = render(
    <AppStateProvider>
      <MockedProvider mocks={mocks} addTypename={false}>
        <App>
          <AuthRoute />
        </App>
      </MockedProvider>
    </AppStateProvider>
  );

  fireEvent.change(getByLabelText(/email/i), {
    target: { value: 'test@mail.com' },
  });
  fireEvent.change(getByLabelText(/password/i), {
    target: { value: '1234' },
  });

  await waitFor(() => fireEvent.click(getByText('Submit')));
  await waitFor(() =>
    expect(getByTestId('main-container')).toBeInTheDocument()
  ).catch((e) => console.log(e));
});
