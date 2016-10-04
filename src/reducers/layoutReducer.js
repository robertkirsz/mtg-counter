const initialState = {
  mainClassNames: ''
}

export default function gameStateReducer(state = initialState, action) {
  let newState = { ...state }

  switch (action.type) {

    case 'CHANGE_MAIN_CLASSES': {
      newState.mainClassNames = action.classNames

      return newState
    }

    default: {
      return state
    }
  }
}
