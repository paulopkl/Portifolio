import { createStore, combineReducers } from 'redux';
const initialState = { language: 'Portuguese' }

const reducers = combineReducers({
    language: (state = initialState, action) => {
        switch (action.type) {
            case 'CHANGE_LANGUAGE': {
                return { language: action.payload }
            }
            default: return state
        }
    }
});

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const storeConfig = () => {
    return createStore(reducers, devTools);
}

export default storeConfig;