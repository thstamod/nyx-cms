import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { Provider } from 'react-redux';
import { ApolloLink, concat } from 'apollo-link';
import App from './components/App';
import store from './redux/store';

import httpLink from './api/backend';

import './scss/main.scss';

const getAuthToken = () =>
  store.getState().user.isLoggedIn ? store.getState().user.token : null;

const authMiddleware = new ApolloLink((operation, forward) => {
  const token = getAuthToken();
  operation.setContext(({ headers = {} }) => ({
    headers: {
      ...headers,
      Authorization: token ? `Bearer ${token}` : '',
    },
  }));

  return forward(operation);
});

const client = new ApolloClient({
  link: concat(authMiddleware, httpLink),
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    {' '}
    <Provider store={store}>
      <App />
    </Provider>
  </ApolloProvider>,
  document.querySelector('#root')
);
