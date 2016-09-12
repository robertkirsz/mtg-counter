import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions/fuelSavingsActions'
import cn from 'classnames'

function mapStateToProps(state) {
  return {
    settingsPanel: state.settingsPanel
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

const SettingsPanel = ({ actions, settingsPanel }) => {
  console.warn('this.props.settingsPanel', settingsPanel)

  const cogIconClick = () => {
    actions.settingsPanel('toggle')
  }

  return (
    <div className={cn(
      'settings',
      { 'settings--opened': settingsPanel }
    )}>
      <div className="settings__icons-wrapper">
        <span className="settings__icon tokens" title="Tokens" />
        <span className="settings__icon poison" title="Poison counter" />
        <span className="settings__icon commander" title="Commander damage" />
        <span className="settings__icon dice" title="Dice" />
        <span className="settings__icon fa fa-undo" title="Reset current game" />
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
