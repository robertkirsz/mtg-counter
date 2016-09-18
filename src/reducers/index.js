import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import gameState from './gameStateReducer'
import layout from './layoutReducer'

const rootReducer = combineReducers({
  gameState,
  layout,
  routing: routerReducer
})

export default rootReducer
