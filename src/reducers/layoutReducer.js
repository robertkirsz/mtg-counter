const initialState = {
  mainClassNames: '', // TODO: think I need to rethink this one
  // Visibility state of various screens and panels
  settingsPanel: false, // Stripe with cog icon
  settingsScreen: false, // Full settings screen (TODO: not implemented yet)
  diceScreen: false, // Dice screen
}

const layoutReducer = (state = initialState, action) => {
  let newState = { ...state }

  switch (action.type) {

    case 'CHANGE_MAIN_CLASSES': {
      newState.mainClassNames = action.classNames

      return newState
    }

    case 'CHANGE_SCREEN': {
      if (action.actionType === 'close') newState[action.screenName] = false
      if (action.actionType === 'open') newState[action.screenName] = true
      if (action.actionType === 'toggle') newState[action.screenName] = !newState[action.screenName]

      // Close settings panel when dice screen is being opened
      if (action.screenName === 'diceScreen' && newState.diceScreen) newState.settingsPanel = false

      return newState
    }

    default: {
      return state
    }
  }
}

export default layoutReducer
