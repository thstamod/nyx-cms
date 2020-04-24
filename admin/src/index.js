import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { AppStateProvider } from './context/AppContext';
import WithApolloProvider from './containers/withApolloProvider';
import './styles/main.css';

ReactDOM.render(
  <AppStateProvider>
    <WithApolloProvider>
      <App />
    </WithApolloProvider>
  </AppStateProvider>,
  document.querySelector('#root')
);
