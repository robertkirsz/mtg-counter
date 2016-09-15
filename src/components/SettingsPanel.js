import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions/fuelSavingsActions'
import cn from 'classnames'

import { bindMethods, isContainedIn } from '../utils';

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

class SettingsPanel extends Component {
  constructor(props, context) {
    super(props, context)

    bindMethods(this)
  }

  componentDidMount () {
    window.addEventListener('click', this.windowClick);
  }

  componentWillUnmount () {
    window.removeEventListener('click', this.windowClick);
  }

  cogIconClick () {
    this.props.actions.settingsPanel('toggle')
  }

  settingsPanelIconClick (iconType) {
    if (iconType === 'poison') this.props.actions.showCounters('poison')
    if (iconType === 'commander') this.props.actions.showCounters('commander')
    if (iconType === 'reset') console.log('reste')
  }

  windowClick (e) {
    const clickedOut = !isContainedIn(e.target, this.refs.settingPanel);
    if (this.props.settingsPanel && clickedOut) this.props.actions.settingsPanel('toggle')
  }

  render () {
    return (
      <div
        className={cn(
          'settings',
          { 'settings--opened': this.props.settingsPanel }
        )}
        ref='settingPanel'
      >
        <div className="settings__icons-wrapper">
          <span
            className="settings__icon poison"
            onClick={() => { this.settingsPanelIconClick('poison'); }}
            title="Poison counter"
          />
          <span
            className="settings__icon commander"
            onClick={() => { this.settingsPanelIconClick('commander'); }}
            title="Commander damage"
          />
          {/*
            <span
              className="settings__icon dice"
              onClick={() => { this.settingsPanelIconClick('dice'); }}
              title="Dice"
            />
          */}
          <span
            className="settings__icon fa fa-undo"
            onClick={() => { this.settingsPanelIconClick('reset'); }}
            title="Reset current game"
          />
        </div>
        <span className="fa fa-cog" onClick={this.cogIconClick} />
      </div>
    )
  }
}

SettingsPanel.propTypes = {
  actions: PropTypes.object.isRequired,
  settingsPanel: PropTypes.bool.isRequired
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SettingsPanel)
