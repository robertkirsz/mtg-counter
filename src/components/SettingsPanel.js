import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions/fuelSavingsActions'
import cn from 'classnames'

function mapStateToProps({ gameState }) {
  return {
    settingsPanel: gameState.settingsPanel
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

const SettingsPanel = ({ actions, settingsPanel }) => {
  const cogIconClick = () => {
    actions.settingsPanel('toggle')
  }

  const settingsPanelIconClick = (iconType) => {
    if (iconType === 'poison') actions.showCounters('poison')
    if (iconType === 'commander') actions.showCounters('commander')
  }

  return (
    <div className={cn(
      'settings',
      { 'settings--opened': settingsPanel }
    )}>
      <div className="settings__icons-wrapper">
        <span
          className="settings__icon poison"
          onClick={() => { settingsPanelIconClick('poison'); }}
          title="Poison counter"
        />
        <span
          className="settings__icon commander"
          onClick={() => { settingsPanelIconClick('commander'); }}
          title="Commander damage"
        />
        <span
          className="settings__icon dice"
          onClick={() => { settingsPanelIconClick('dice'); }}
          title="Dice"
        />
        <span
          className="settings__icon fa fa-undo"
          onClick={() => { settingsPanelIconClick('reset'); }}
          title="Reset current game"
        />
      </div>
      <span className="fa fa-cog" onClick={cogIconClick} />
    </div>
  )
}

SettingsPanel.propTypes = {
  actions: PropTypes.object.isRequired,
  settingsPanel: PropTypes.bool.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SettingsPanel)
