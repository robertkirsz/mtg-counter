import { CHANGE_SETTING_PANEL_STATE } from '../constants/actionTypes'
import objectAssign from 'object-assign'
import initialState from './initialState'

export default function settingsPanelReducer(state = initialState.settingsPanel, action) {
  let newState

  switch (action.type) {
    case CHANGE_SETTING_PANEL_STATE:
      if (action.action === 'close') return false
      if (action.action === 'open') return true
      if (action.action === 'toggle') return !state

    default:
      return state
  }
}
