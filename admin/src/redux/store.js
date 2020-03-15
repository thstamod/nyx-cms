import { createStore, compose } from "redux";
import rootReducer from './reducers'


export default createStore(rootReducer, {},
  compose(
    // applyMiddleware(client.middleware()),
    // If you are using the devToolsExtension, you can add it here also
    (typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined') ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f,
  )
);
