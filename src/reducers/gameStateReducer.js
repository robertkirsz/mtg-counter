import * as actionTypes from '../constants'
import initialState from './initialState'
import _ from 'lodash'

export default function gameStateReducer(state = initialState, action) {
  let newState = { ...state }
  let players = [ ...state.game.players ]

  switch (action.type) {

    case actionTypes.SHOW_COUNTERS: {
      const counters = {...newState.counters}
      counters[action.counterType] = !counters[action.counterType]
      newState.counters = counters

      // If we're showing commander counter, make player's life equel to 40
      // If we're hiding it, make it equal to previous value or 20
      if (action.counterType === 'commander') {
        players = _.map(newState.game.players, player => {
          let _player = player.copy()
          if (newState.counters.commander) _player.update({ life: 40, lifeBackup: player.life })
          else _player.update({ life: player.lifeBackup || 20 })
          return _player
        })
        newState = {
          ...newState,
          game: {
            ...newState.game,
            players
          }
        }
      }

      return newState
    }

    case actionTypes.TOGGLE_SCREEN: {
      if (action.screenName === 'dice') newState.diceScreen = !newState.diceScreen
      newState.settingsPanel = false

      return newState
    }

    case actionTypes.CHANGE_SETTING_PANEL_STATE: {
      if (action.action === 'close') newState.settingsPanel = false
      if (action.action === 'open') newState.settingsPanel = true
      if (action.action === 'toggle') newState.settingsPanel = !newState.settingsPanel

      return newState
    }

    case actionTypes.RESET_GAME: {
      players = _.map(newState.game.players, player => {
        let _player = player.copy()
        const clearData = { lifeBackup: 0, poisonCounters: 0, commanderDamage: 0 }
        if (newState.counters.commander) _player.update({ ...clearData, life: 40 })
        else _player.update({ ...clearData, life: 20 })
        return _player
      })
      newState = {
        ...newState,
        game: {
          ...newState.game,
          players
        }
      }

      return newState
    }

    case actionTypes.UPDATE_PLAYER: {
      const playerIndex = _.findIndex(players, { number: action.playerNumber })
      const playerObject = players[playerIndex].copy()
      // If we're changing color of a new player, set his life as well
      if (!playerObject.color && action.dataToUpdate.color && playerObject.life === undefined) action.dataToUpdate.life = 20
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
    }

    default: {
      return state
    }
  }
}
