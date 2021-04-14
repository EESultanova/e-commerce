import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { applyMiddleware, createStore } from 'redux';
import rootReducer from './redux/reducers/rootReducer';
import initState from './redux/initState';
import { composeWithDevTools } from 'redux-devtools-extension'
import { Provider } from 'react-redux';
import thunk from "redux-thunk"
import createSagaMiddleware from 'redux-saga'
import rootSaga from './redux/saga/rootSaga';
import ProfileContextProvider from './contexts/ProfileContext';

const sagaMiddleware = createSagaMiddleware()
const store = createStore(rootReducer, initState(), composeWithDevTools(applyMiddleware(thunk, sagaMiddleware)))
sagaMiddleware.run(rootSaga)

store.subscribe(() => {
  window.localStorage.setItem('myApp', JSON.stringify(store.getState()))
})


ReactDOM.render(
  <React.StrictMode>
    <ProfileContextProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </ProfileContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
