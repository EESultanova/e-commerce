import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { applyMiddleware, createStore } from 'redux';
import rootReducer from './redux/reducers/rootReducer';
import initState from './redux/initState';
import { composeWithDevTools } from 'redux-devtools-extension'
import { Provider } from 'react-redux';
import thunk from "redux-thunk"

const store = createStore(rootReducer, initState, composeWithDevTools(applyMiddleware(thunk)))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
