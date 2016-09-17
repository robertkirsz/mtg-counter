import * as types from '../constants'

// example of a thunk using the redux-thunk middleware
// export function saveFuelSavings(settings) {
//   return function (dispatch) {
//     // thunks allow for pre-processing actions, calling apis, and dispatching multiple actions
//     // in this case at this point we could call a service that would persist the fuel savings
//     return dispatch({
//       type: types.SAVE_FUEL_SAVINGS,
//       dateModified: dateHelper.getFormattedDateTime(),
//       settings
//     })
//   }
// }

export function settingsPanel(action) {
  return {
    type: types.CHANGE_SETTING_PANEL_STATE,
    action
  }
}

export function showCounters(counterType) {
  return {
    type: types.SHOW_COUNTERS,
    counterType
  }
}

export function updatePlayer({ playerNumber, dataToUpdate }) {
  return {
    type: types.UPDATE_PLAYER,
    playerNumber,
    dataToUpdate
  }
}

export function resetGame() {
  return {
    type: types.RESET_GAME
  }
}

export function toggleScreen(screenName) {
  return {
    type: types.TOGGLE_SCREEN,
    screenName
  }
}
