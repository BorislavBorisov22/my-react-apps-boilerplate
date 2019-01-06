import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

const getRootReducer = () => {
  return combineReducers({
    routing: routerReducer,
  })
}

export default getRootReducer
