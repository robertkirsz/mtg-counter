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

export const settingsPanel = (action) => ({
  type: 'CHANGE_SETTING_PANEL_STATE',
  action
})

export const showCounters = (counterType) => ({
  type: 'SHOW_COUNTERS',
  counterType
})

export const updatePlayer = ({ playerNumber, dataToUpdate }) => ({
  type: 'UPDATE_PLAYER',
  playerNumber,
  dataToUpdate
})

export const resetGame = () => ({
  type: 'RESET_GAME'
})

export const newGame = () => ({
  type: 'NEW_GAME'
})

export const toggleScreen = (screenName) => ({
  type: 'TOGGLE_SCREEN',
  screenName
})

export const changeMainClasses = (classNames) => ({
  type: 'CHANGE_MAIN_CLASSES',
  classNames
})
