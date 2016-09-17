import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions'
import cn from 'classnames'
import _ from 'lodash'

import { bindMethods, isContainedIn } from '../utils';

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
    const { actions, players } = this.props
    if (iconType === 'poison') actions.showCounters('poison')
    if (iconType === 'commander') actions.showCounters('commander')
    if (iconType === 'reset') {
      actions.resetGame()
      actions.settingsPanel('close')
    }
    if (iconType === 'dice') {
      actions.toggleScreen('dice')
    }
    if (iconType === 'changeColor') {
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
  }

  windowClick (e) {
    const {
      props: { settingsPanel, actions },
      refs: { settingsPanelNode }
    } = this

    const clickedOut = !isContainedIn(e.target, settingsPanelNode)
    if (settingsPanel && clickedOut) actions.settingsPanel('close')
  }

  render () {
    const { players, hidden, settingsPanel } = this.props

    const allPlayersAreUndefined = _.every(players, player => !player.isDefined());
    const settingsPanelClassName = cn('settings', { 'settings--opened': settingsPanel, 'settings--hidden': hidden })

    return (
      <div
        className={settingsPanelClassName}
        ref="settingsPanelNode"
      >
        <div className="settings__icons-wrapper">
          <span
            className="settings__icon poison"
            onClick={() => { this.settingsPanelIconClick('poison'); }}
            title="Poison counter"
            disabled={allPlayersAreUndefined}
          />
          <span
            className="settings__icon commander"
            onClick={() => { this.settingsPanelIconClick('commander'); }}
            title="Commander damage"
            disabled={allPlayersAreUndefined}
          />
          <span
            className="settings__icon dice"
            onClick={() => { this.settingsPanelIconClick('dice'); }}
            title="Dice"
          />
          <span
            className="settings__icon fa fa-paint-brush"
            onClick={() => { this.settingsPanelIconClick('changeColor'); }}
            title="Change color"
          />
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
  settingsPanel: PropTypes.bool.isRequired,
  players: PropTypes.array,
  hidden: PropTypes.bool
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SettingsPanel)
