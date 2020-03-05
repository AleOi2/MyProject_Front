import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import configureStore from './redux/store/store'
import { Routes } from './Routes'

let store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <Routes></Routes>
    </Provider>
    , document.getElementById('root'));

