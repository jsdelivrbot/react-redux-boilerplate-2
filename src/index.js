// Root and Entry point of our app
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

// Routing with React-Router
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Redux Middleware
import promise from 'redux-promise';

// Our own source code
import reducers from './reducers';
import Home from './components/home';

// Redux Configurations
const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

// Root HTML Container
const root = document.querySelector('#app');

// Our App to render, with redux store
const app = 
    <Provider store={createStoreWithMiddleware(reducers)}>
        <BrowserRouter>
            <div>
                <Switch>
                    <Route path="/" component={Home} />
                </Switch>
            </div>
        </BrowserRouter>
    </Provider>;

ReactDOM.render(app, root);