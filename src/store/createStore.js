import createHistory from 'history/createBrowserHistory'
import createSagaMiddleware from 'redux-saga'
import { routerMiddleware } from 'react-router-redux'

import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import getRootReducer from '~reducers'
import rootSaga from '~sagas'
import initialState from './initialState'

const configureStore = history => {
  const middlewares = []
  const enhancers = []

  // middleware configuration
  const sagaMiddleware = createSagaMiddleware()
  middlewares.push(sagaMiddleware, routerMiddleware(history))

  // enhancers configuration
  enhancers.push(applyMiddleware(...middlewares))
  const composedEnhancers = composeWithDevTools(...enhancers)

  // store initialization
  const rootReducer = getRootReducer()
  const store = createStore(rootReducer, initialState, composedEnhancers)

  store.sagaTask = sagaMiddleware.run(rootSaga)

  return store
}

export const history = createHistory()
export const store = configureStore(history)
