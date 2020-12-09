import { createStore, combineReducers } from 'redux';
import reducers from './reducer';

const storeState = combineReducers({
    language: reducers
});

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const storeConfig = () => createStore(storeState, devTools);

export default storeConfig;