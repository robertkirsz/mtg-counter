import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import gameState from './gameStateReducer'

const rootReducer = combineReducers({
  gameState,
  routing: routerReducer
})

export default rootReducer
