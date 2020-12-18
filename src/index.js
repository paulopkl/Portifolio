import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';

import { Provider } from 'react-redux';

import storeConfig from './redux/store';

import './index.css';

const store = storeConfig();

ReactDOM.render(
    <Provider store={store}>
        <Routes />
    </Provider>
, document.getElementById('root'));