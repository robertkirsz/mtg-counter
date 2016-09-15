import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions/fuelSavingsActions'
import _ from 'lodash'
import cn from 'classnames'

import { bindMethods, stringify } from '../utils'

import { SettingsPanel, PlayerComponent } from './'

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
  }

  updatePlayer (updateData) {
    this.props.actions.updatePlayer(updateData)
  }

  setBackgroundColor () {
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

    const { game } = this.props.gameState
    const bottomPlayerColor     = _.get(game, 'players[1].color', 'clear')
    const topPlayerColor        = _.get(game, 'players[0].color', 'clear')
    const bottomBackgroundColor = bottomBackgroundColors[bottomPlayerColor]
    const topBackgroundColor    = topBackgroundColors[topPlayerColor]

    return {
      backgroundImage    : 'url(img/tekstury/png1.png), linear-gradient(to bottom, rgba(255,255,255,0.25), rgba(255,255,255,0.25)), linear-gradient(to bottom, ' + topBackgroundColor + ', ' + bottomBackgroundColor + ')',
      backgroundPosition : 'center, left top',
      backgroundSize     : 'cover, auto'
    }
  }

  render() {
    const { counters, game } = this.props.gameState
    // console.warn('HomePage', stringify(this.props.gameState))

    return (
      <div
        id="main_window"
        className={cn(
          {
            'poison': counters.poison, // TODO: refactor this
            'commander': counters.commander
          }
        )}
        style={this.setBackgroundColor()}
      >

        { /*
          <div id="warning" className="layer">
            <div className="box">
              <p>Are you sure you want to reset the game?</p>
              <i className="fa fa-check fa-2x" />
              <i className="fa fa-times fa-2x" />
            </div>
          </div>

          <div id="game_over_screen" className="layer">
            <div className="box">
              <p className="message">Message template</p>
              <button>Continue playing</button>
              <button>See results</button>
              <button>Start new game</button>
            </div>
          </div>

          <div id="dice" className="layer">
            <div className="die player_2">6</div>
            <div className="die player_1">3</div>
          </div>
        */ }

        <SettingsPanel />

        <div id="counters">
          {
            game.players.map(player => (
              <PlayerComponent
                key={player.number}
                player={player}
                updatePlayer={this.updatePlayer}
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
