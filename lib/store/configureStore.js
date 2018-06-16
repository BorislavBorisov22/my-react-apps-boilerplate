import { createStore, compose, applyMiddleware } from 'redux';

import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import rootReducer from './../reducers/index';

import createSagaMiddleware from 'redux-saga';
const sagaMiddleware = createSagaMiddleware();

import rootSaga from '../sagas';

export const configureStoreProd = (initialState) => {

    const middlewares = [
        sagaMiddleware
    ];

    const store = createStore(rootReducer, initialState, compose(
        applyMiddleware(...middlewares)
    ));

    sagaMiddleware.run(rootSaga);

    return store;
};

export const configureStoreDev = (initialState) => {
    const middleWares = [
        reduxImmutableStateInvariant(),
        sagaMiddleware
    ];

    const composeEnhancers = typeof window === 'object'
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        : compose;

    const store = createStore(rootReducer, initialState, composeEnhancers(
        applyMiddleware(...middleWares)
    ));

    sagaMiddleware.run(rootSaga);

    return store;
};

const configureStore = process.env.NODE_ENV === 'production' ? configureStoreProd : configureStoreDev;

export default configureStore;