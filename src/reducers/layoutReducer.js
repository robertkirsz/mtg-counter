import * as actionTypes from '../constants'
import initialLayoutState from './initialLayoutState'

export default function gameStateReducer(state = initialLayoutState, action) {
  let newState = { ...state }

  switch (action.type) {

    case actionTypes.CHANGE_MAIN_CLASSES: {
      newState.mainClassNames = action.classNames

      return newState
    }

    default: {
      return state
    }
  }
}
