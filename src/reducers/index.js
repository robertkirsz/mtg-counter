import { combineReducers } from 'redux';
import fuelSavings from './fuelSavingsReducer';
import gameState from './gameStateReducer';
import {routerReducer} from 'react-router-redux';

const rootReducer = combineReducers({
  fuelSavings,
  gameState,
  routing: routerReducer
});

export default rootReducer;
