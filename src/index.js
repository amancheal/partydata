import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import  "bootstrap/dist/css/bootstrap.css";
import 'bulma/css/bulma.css';
import {createStore, applyMiddleware, compose} from 'redux';
import rootReducers from './reducers/rootReducers';
import thunk from 'redux-thunk'
import {Provider} from 'react-redux';

const store = createStore(rootReducers, compose(applyMiddleware(thunk)))


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

