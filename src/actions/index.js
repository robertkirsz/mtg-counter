import * as actionTypes from '../constants'

// example of a thunk using the redux-thunk middleware
// export function saveFuelSavings(settings) {
//   return function (dispatch) {
//     // thunks allow for pre-processing actions, calling apis, and dispatching multiple actions
//     // in this case at this point we could call a service that would persist the fuel savings
//     return dispatch({
//       type: actionTypes.SAVE_FUEL_SAVINGS,
//       dateModified: dateHelper.getFormattedDateTime(),
//       settings
//     })
//   }
// }

export function settingsPanel(action) {
  return {
    type: actionTypes.CHANGE_SETTING_PANEL_STATE,
    action
  }
}

export function showCounters(counterType) {
  return {
    type: actionTypes.SHOW_COUNTERS,
    counterType
  }
}

export function updatePlayer({ playerNumber, dataToUpdate }) {
  return {
    type: actionTypes.UPDATE_PLAYER,
    playerNumber,
    dataToUpdate
  }
}

export function resetGame() {
  return {
    type: actionTypes.RESET_GAME
  }
}

export function toggleScreen(screenName) {
  return {
    type: actionTypes.TOGGLE_SCREEN,
    screenName
  }
}
