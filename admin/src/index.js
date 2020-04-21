import React from 'react';
import ReactDOM from 'react-dom';

// import { Provider } from 'react-redux';

import App from './components/App/App';
// import store from './redux/store';
import { AppStateProvider } from './context/AppContext';
import WithApolloProvider from './containers/withApolloProvider';

import './scss/main.scss';

ReactDOM.render(
  <AppStateProvider>
    <WithApolloProvider>
      <App />
    </WithApolloProvider>
  </AppStateProvider>,
  document.querySelector('#root')
);
