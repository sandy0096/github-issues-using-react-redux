import React from 'react';
import logo from './logo.svg';
import './App.css';

import Layout from './driver';
import reducer from './reducers';
import { createStore, applyMiddleware } from 'redux';

import { Provider } from 'react-redux';
import { getIssues } from './actions';
import thunk from 'redux-thunk'

const middleware = [thunk];

const store = createStore(reducer, applyMiddleware(...middleware));

store.dispatch(getIssues({ page: 1 }))

function App() {
    return <Provider store={store}>
        <Layout />
    </Provider>
}

export default App;
