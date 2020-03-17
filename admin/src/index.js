import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { Provider } from 'react-redux';
import App from './components/App';
import store from './redux/store';

import httpLink from './api/backend';

import './scss/main.scss';


const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});


// const authLink = setContext((_, { headers }) => {
//   const token = window.initialData.jwt;
//   // return the headers to the context so httpLink can read them
//   return {
//     headers: {
//       ...headers,
//       authorization: token ? `Bearer ${token}` : "",
//     }
//   }
// });

ReactDOM.render(<ApolloProvider client={client}> <Provider store={store}><App /></Provider></ApolloProvider>, document.querySelector('#root'));
