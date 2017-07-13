// Root and Entry point of our app
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './components/app';
import reducers from './reducers';

// Redux Configurations
const createStoreWithMiddleware = applyMiddleware()(createStore);

// Root HTML Container
const root = document.querySelector('#app');

// Our App to render, with redux store
const app = 
    <Provider store={createStoreWithMiddleware(reducers)}>
        <App />
    </Provider>;

ReactDOM.render(app, root);