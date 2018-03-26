import React from 'react';
import ReactDOM from 'react-dom';

import {Route} from 'react-router';
import {HashRouter} from 'react-router-dom'
import {createStore, applyMiddleware, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import Immutable from 'immutable';
import registerServiceWorker from './registerServiceWorker';

let initialState = { config: Immutable.fromJS(window.config) };
let contextPath = initialState.contextPath ? initialState.contextPath : '/';

console.log(window.config);
console.log('context path: ' + contextPath);