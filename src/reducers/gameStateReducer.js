import * as constants from '../constants/actionTypes'
import initialState from './initialState'
import _ from 'lodash'

export default function gameStateReducer(state = initialState.gameState, action) {
  let newState

  switch (action.type) {

    case constants.SHOW_COUNTERS:
      newState = {...state}
      const counters = {...newState.counters}
      counters[action.counterType] = !counters[action.counterType]
      newState.counters = counters

      return newState

    case constants.CHANGE_SETTING_PANEL_STATE:
      newState = {...state}
      if (action.action === 'close') newState.settingsPanel = false
      if (action.action === 'open') newState.settingsPanel = true
      if (action.action === 'toggle') newState.settingsPanel = !newState.settingsPanel

      return newState

    case constants.UPDATE_PLAYER:
      const players = [...state.game.players]
      const playerIndex = _.findIndex(players, { number: action.playerNumber })
      const playerObject = players[playerIndex].copy()
      // If we're changing color of a new player, set his life as well
      if (!playerObject.color && action.dataToUpdate.color) action.dataToUpdate.life = 20
      playerObject.update(action.dataToUpdate)

      newState = {
        ...state,
        game: {
          ...state.game,
          players: [
            ...players.slice(0, playerIndex),
            playerObject,
            ...players.slice(playerIndex + 1)
          ]
        }
      }

      return newState

    default:
      return state
  }
}
