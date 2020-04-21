import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
// import { Provider } from 'react-redux';
import { ApolloLink, concat } from 'apollo-link';
// import store from './redux/store';
import { useAppState } from '../context/AppContext';

import httpLink from '../api/backend';

const WithApolloProvider = ({ children }) => {
  console.log(useAppState());
  const [{ isLoggedIn, token }] = useAppState();

  const authMiddleware = new ApolloLink((operation, forward) => {
    const _token = isLoggedIn ? token : null;
    operation.setContext(({ headers = {} }) => ({
      headers: {
        ...headers,
        Authorization: token ? `Bearer ${_token}` : '',
      },
    }));

    return forward(operation);
  });

  const client = new ApolloClient({
    link: concat(authMiddleware, httpLink),
    cache: new InMemoryCache(),
  });

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default WithApolloProvider;
