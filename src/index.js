import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import configureStore from './redux/store/store'
import { Routes } from './Routes'
import WebFont from 'webfontloader';

let store = configureStore();


WebFont.load({
  google: {
    families: ['Roboto Slab', 'serif', 'Bellota', 'cursive']
  }
});



ReactDOM.render(
    <Provider store={store}>
        <Routes></Routes>
    </Provider>
    , document.getElementById('root'));

