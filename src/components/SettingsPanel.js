import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions'
import cn from 'classnames'
import _ from 'lodash'
import Swipeable from 'react-swipeable'

import { bindMethods } from '../utils'

function mapStateToProps({ gameState }) {
  return {
    settingsPanel: gameState.settingsPanel,
    players: gameState.game.players
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

const debugMode = false

class SettingsPanel extends Component {
  constructor(props, context) {
    super(props, context)

    bindMethods(this)
  }

  componentDidMount () {
    window.addEventListener('click', this.windowClick)
  }

  componentWillUnmount () {
    window.removeEventListener('click', this.windowClick)
  }

  // Handles clicking on the cog icon
  cogIconClick () {
    if (debugMode) console.warn('SettingsPanel -> cogIconClick()')
    this.props.actions.settingsPanel('toggle')
  }

  // Handles clicking on the settings icons
  settingsPanelIconClick (iconType) {
    if (debugMode) console.warn('SettingsPanel -> settingsPanelIconClick(iconType)', iconType)
    const { actions, players } = this.props
    if (iconType === 'poison') actions.showCounters('poison')
    if (iconType === 'commander') actions.showCounters('commander')
    if (iconType === 'dice') actions.toggleScreen('dice')
    if (iconType === 'change-color') {
      _.forEach(players, player => {
        actions.updatePlayer({ // TODO: Refactor to not use object but separate properties
          playerNumber: player.number,
          dataToUpdate: {
            color: null
          }
        })
      })
      actions.settingsPanel('close')
    }
    if (iconType === 'reset') {
      actions.resetGame()
      actions.settingsPanel('close')
    }
    if (iconType === 'new-game') {
      actions.settingsPanel('close')
      actions.changeMainClasses('hidden')
      setTimeout(() => {
        actions.newGame()
        setTimeout(() => {
          actions.changeMainClasses('')
        }, 300)
      }, 300)
    }
  }

  // Fires when clicking anywhere on the screen
  // (top element has 'stopPropagation' on it so it won't fire this function)
  windowClick () {
    if (debugMode) console.warn('SettingsPanel -> winclick()')
    if (this.props.settingsPanel) this.closeSettingsPanel()
  }

  // Sends action to close settings panel
  closeSettingsPanel () {
    if (debugMode) console.warn('SettingsPanel -> closeSettingsPanel()')
    this.props.actions.settingsPanel('close')
  }

  render () {
    const { players, hidden, settingsPanel } = this.props
    // True if none of the players is fully initialized
    const allPlayersAreUndefined = _.every(players, player => !player.isDefined())
    // Container classes
    const settingsPanelClassName = cn(
      'settings', // Default class
      {
        'settings--opened': settingsPanel, // Opens/closes setting panel
        'settings--hidden': hidden // Hides everything
      })

    return (
      <Swipeable
        className={settingsPanelClassName}
        onSwipedRight={this.closeSettingsPanel}
        onClick={e => e.stopPropagation()} // Prevents 'widnowClick()'
      >
        <div className="settings__icons-wrapper">
          <span
            className="settings__icon poison"
            onClick={() => { this.settingsPanelIconClick('poison') }}
            title="Poison counter"
            disabled={allPlayersAreUndefined}
          />
          <span
            className="settings__icon commander"
            onClick={() => { this.settingsPanelIconClick('commander') }}
            title="Commander damage"
            disabled={allPlayersAreUndefined}
          />
          <span
            className="settings__icon dice"
            onClick={() => { this.settingsPanelIconClick('dice') }}
            title="Dice"
          />
          <span
            className="settings__icon fa fa-paint-brush"
            onClick={() => { this.settingsPanelIconClick('change-color') }}
            title="Change color"
          />
          <span
            className="settings__icon fa fa-undo"
            onClick={() => { this.settingsPanelIconClick('reset') }}
            title="Reset current game"
          />
          <span
            className="settings__icon fa fa-file-o"
            onClick={() => { this.settingsPanelIconClick('new-game') }}
            title="Start new game"
          />
        </div>
        <span className="fa fa-cog" onClick={this.cogIconClick} />
      </Swipeable>
    )
  }
}

SettingsPanel.propTypes = {
  actions: PropTypes.object.isRequired,
  settingsPanel: PropTypes.bool.isRequired,
  players: PropTypes.array,
  hidden: PropTypes.bool
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SettingsPanel)
