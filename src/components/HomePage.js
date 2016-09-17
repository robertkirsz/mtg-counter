import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions'
import _ from 'lodash'
import cn from 'classnames'

import { bindMethods } from '../utils'

import { SettingsPanel, PlayerComponent, DiceScreen } from './'

function mapStateToProps({ gameState }) {
  return {
    gameState
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

class HomePage extends Component {
  constructor(props, context) {
    super(props, context)

    bindMethods(this)

    this.state = {
      backgroundStyles: this.setBackgroundColor(props.gameState.game)
    }
  }

  componentWillReceiveProps (nextProps) {
    const playersUpdated = this.props.gameState.game.players !== nextProps.gameState.game.players
    if (playersUpdated) {
      console.warn('HomePage -> componentWillReceiveProps', playersUpdated)
      this.setState({ backgroundStyles: this.setBackgroundColor(nextProps.gameState.game) })
    }
  }

  setBackgroundColor (game) { // <- should only nedd game.players
    console.warn('setBackgroundColor')
      const bottomBackgroundColors = {
      white : ['#FC9700', '#FFE292'/*, '#FFF4E4'*/].reverse(),
      blue  : ['#004394', '#009AD0'/*, '#E0F2FF'*/].reverse(),
      black : ['#4C0064', '#B3307E'/*, '#F5E5FF'*/].reverse(),
      red   : ['#94001A', '#E7093C'/*, '#FFE6EC'*/].reverse(),
      green : ['#01662C', '#82B300'/*, '#E7FFE5'*/].reverse(),
      clear : ['hsl(  0,  0%, 100%)', 'hsl(  0,  0%, 100%)'/*, 'hsl(  0,  0%, 100%)'*/]
    }

    const topBackgroundColors = {
      white : ['#FC9700', '#FFE292'/*, '#FFF4E4'*/],
      blue  : ['#004394', '#009AD0'/*, '#E0F2FF'*/],
      black : ['#4C0064', '#B3307E'/*, '#F5E5FF'*/],
      red   : ['#94001A', '#E7093C'/*, '#FFE6EC'*/],
      green : ['#01662C', '#82B300'/*, '#E7FFE5'*/],
      clear : ['hsl(  0,  0%, 100%)', 'hsl(  0,  0%, 100%)'/*, 'hsl(  0,  0%, 100%)'*/]
    }

    const bottomPlayerColor     = _.get(game, 'players[1].color') || 'clear'
    const topPlayerColor        = _.get(game, 'players[0].color') || 'clear'
    const bottomBackgroundColor = bottomBackgroundColors[bottomPlayerColor]
    const topBackgroundColor    = topBackgroundColors[topPlayerColor]

    return {
      backgroundImage    : 'url(img/tekstury/png1.png), linear-gradient(to bottom, rgba(255,255,255,0.25), rgba(255,255,255,0.25)), linear-gradient(to bottom, ' + topBackgroundColor + ', ' + bottomBackgroundColor + ')',
      backgroundPosition : 'center, left top',
      backgroundSize     : 'cover, auto'
    }
  }

  render() {
    const {
      gameState: { counters, game, diceScreen },
      actions
    } = this.props;

    return (
      <div
        id="main_window"
        className={cn(
          {
            'poison': counters.poison, // TODO: refactor this
            'commander': counters.commander
          }
        )}
        style={this.state.backgroundStyles}  // TODO: refactor this, move to shouldUpdate
      >
        <DiceScreen
          hideScreen={!diceScreen}
          actions={actions}
        />

        <SettingsPanel hidden={diceScreen} />

        <div id="counters" className={cn({ hidden: diceScreen })}>
          {
            game.players.map(player => (
              <PlayerComponent
                key={player.number}
                player={player}
              />
            ))
          }
        </div>

      </div>
    )
  }
}

HomePage.propTypes = {
  actions: PropTypes.object.isRequired,
  gameState: PropTypes.object.isRequired
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage)
