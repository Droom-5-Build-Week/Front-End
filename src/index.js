import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {
    BrowserRouter as Router
} from 'react-router-dom'

import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

import { Provider } from 'react-redux';
import userReducer from './Store/Reducers/AppReducer';

const store = createStore(
    reducer,
    applyMiddleware(thunk)
);

import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

import { Provider } from 'react-redux';
import userReducer from './Store/Reducers/AppReducer';

const store = createStore(
    userReducer,
    applyMiddleware(thunk)
);

ReactDOM.render(
    <Router>
<<<<<<< HEAD
        <Provider store={store}>
=======
        <Provider store={store} >
>>>>>>> 65501e9f315b84d970f4a46e0bd8716782a71683
            <App />
        </Provider>
    </Router>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
