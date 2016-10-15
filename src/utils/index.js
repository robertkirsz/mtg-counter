import _ from 'lodash'
import { Game } from '../classes'

export const ascendingBy = (key) => (a, b) => a[key] < b[key] ? -1 : a[key] > b[key] ? 1 : 0

export const descendingBy = (key) => (a, b) => a[key] < b[key] ? 1 : a[key] > b[key] ? -1 : 0

// Returns random number from the min - max range
export const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

// checks if one node is contained in another
export const isContainedIn = (target, container) => {
  let node = target
  while (node) {
    if (node === container) {
      return true
    }
    node = node.parentNode
  }
  return false
}

export const isNotEmptyArray = (variable) => (
  !!(Array.isArray(variable) && variable.length)
)

// Returns object with pressed key info
export const keyboardKeys = (e) => {
  const keys = {}

  switch (e.keyCode) {
    case 37: keys.left  = true; break
    case 38: keys.up    = true; break
    case 39: keys.right = true; break
    case 40: keys.down  = true; break
    case 9:  keys.tab   = true; break
    case 13: keys.enter = true; break
    case 27: keys.esc   = true; break
    case 8:  keys.bkspc = true; break
    default: break
  }

  if (e.shiftKey && keys.tab) {
    keys.shiftTab = true
    _.unset(keys, 'tab')
  }

  return keys
}

// Blurs any focused element
export const blurEverything = () => {
  if ('activeElement' in document) document.activeElement.blur()
}

export const stringify = (json) => {
  return JSON.stringify(json, null, 2)
}

export const bindMethods = classInstance => Object.getOwnPropertyNames(Object.getPrototypeOf(classInstance))
    .filter(property => typeof classInstance[property] === 'function')
    .forEach(method => classInstance[method] = classInstance[method].bind(classInstance))

export const arraysEqual = (a, b) => {
  if (a === b) return true
  if (a == null || b == null) return false
  if (a.length != b.length) return false

  // If you don't care about the order of the elements inside
  // the array, you should sort both arrays here.

  for (let i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false
  }

  return true
}

// Saves game state into the Local Storage
export const saveGameState = (state) => {
  localStorage.setItem('MtgCounterGameState', JSON.stringify(state))
  return state
}

// Loads game state from the Local Storage
export const loadGameState = () => {
  // Check Local Storage for saved game state
  let savedGameState = JSON.parse(localStorage.getItem('MtgCounterGameState'))
  // Convert objects to classes and reset some of the settings
  if (savedGameState) {
    savedGameState = {
      ...savedGameState,
      game: new Game({
        players: [
          savedGameState.game.players[0],
          savedGameState.game.players[1]
        ]
      }),
      settingsPanel: false,
      diceScreen: false
    }
  }

  return savedGameState
}
