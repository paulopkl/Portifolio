import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routes from './routes';

import { Provider } from 'react-redux';

import storeConfig from './redux/reducer';

const store = storeConfig();

ReactDOM.render(
    <Provider store={store}>
        <Routes />
    </Provider>
, document.getElementById('root'));