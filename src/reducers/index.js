import { combineReducers } from 'redux';
import fuelSavings from './fuelSavingsReducer';
import settingsPanel from './settingsPanelReducer';
import {routerReducer} from 'react-router-redux';

const rootReducer = combineReducers({
  fuelSavings,
  settingsPanel,
  routing: routerReducer
});

export default rootReducer;
