import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Routes } from './routes/Routes';

// const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__);

ReactDOM.render(
  <Provider >
    <Routes />
  </Provider>,
  document.getElementById('root')
);