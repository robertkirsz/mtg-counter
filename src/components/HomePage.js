import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions'
import _ from 'lodash'
import cn from 'classnames'
import { bindMethods, arraysEqual } from '../utils'
import { SettingsPanel, PlayerComponent, DiceScreen } from './'

const mapStateToProps = ({ gameState, layout }) => ({ gameState, layout })

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch)
})

class HomePage extends Component {
  static propTypes = {
    actions: PropTypes.object.isRequired,
    gameState: PropTypes.object.isRequired,
    layout: PropTypes.object.isRequired
  }

  constructor(props, context) {
    super(props, context)

    bindMethods(this)

    this.state = {
      styles: {
        backgroundImage    : 'url(img/tekstury/png1.png), linear-gradient(to bottom, rgba(255,255,255,0.25), rgba(255,255,255,0.25)), linear-gradient(to bottom, hsl(  0,  0%, 100%), hsl(  0,  0%, 100%))',
        backgroundPosition : 'center, left top',
        backgroundSize     : 'cover, auto'
      }
    }
  }

  componentWillMount () {
    // Check if there is some player data in the store already (retrieved from Local Storage)
    const playerColors = _.map(this.props.gameState.game.players, 'color')
    if (_.some(playerColors, String)) this.setBackgroundColor(this.props.gameState.game)
  }

  componentWillReceiveProps (nextProps) {
    const prevColors = _.map(this.props.gameState.game.players, 'color')
    const nextColors = _.map(nextProps.gameState.game.players, 'color')
    const playerColorsUpdated = !arraysEqual(prevColors, nextColors)
    // If players' colors have changed, update the background
    if (playerColorsUpdated) this.setBackgroundColor(nextProps.gameState.game)
  }

  clickEffect (e) {
    if (window.innerWidth > 1000) {
      this.clickEffectAnimation(e)
      setTimeout(() => {
        this.setState({
          styles: {
            ...this.state.styles,
            transform: 'rotateY(0deg) rotateX(0deg)'
          }
        })
      }, 100)
    }
  }

  clickEffectAnimation (e) {
    const X = Math.floor(e.screenX)
    const Y = Math.floor(e.screenY)
    const rotateY = (X - window.screen.width / 2) / 300
    const rotateX = -(Y - window.screen.height / 2) / 300
    this.setState({
      styles: {
        ...this.state.styles,
        transform: 'rotateY(' + rotateY + 'deg) rotateX(' + rotateX + 'deg)'
      }
    })
  }

  setBackgroundColor (game) {
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

    this.setState({
      styles: {
        ...this.state.styles,
        backgroundImage    : 'url(img/tekstury/png1.png), linear-gradient(to bottom, rgba(255,255,255,0.25), rgba(255,255,255,0.25)), linear-gradient(to bottom, ' + topBackgroundColor + ', ' + bottomBackgroundColor + ')',
        backgroundPosition : 'center, left top',
        backgroundSize     : 'cover, auto'
      }
    })
  }

  render() {
    const {
      gameState: { counters, game, diceScreen },
      layout: { mainClassNames },
      actions
    } = this.props

    return (
      <div
        id="main_window"
        className={cn(
          {
            'poison-counter-visible': counters.poison,
            'commander-counter-visible': counters.commander
          }
        )}
        style={this.state.styles}
        onClick={this.clickEffect}
      >
        <DiceScreen
          hidden={!diceScreen}
          actions={actions}
        />

        <SettingsPanel hidden={diceScreen} />

        <div
          id="counters"
          className={cn(
            mainClassNames,
            { hidden: diceScreen }
          )}
        >
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

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
