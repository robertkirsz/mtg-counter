import React, { Component } from 'react'
import _ from 'lodash'

import { Game, Player } from '../classes'

import { SettingsPanel, PlayerComponent } from './'

class HomePage extends Component {
  constructor(props, context) {
    super(props, context)

    this.updatePlayer = this.updatePlayer.bind(this)
    this.setBackgroundColor = this.setBackgroundColor.bind(this)

    this.state = {
      game: new Game({
        players: [
          new Player({ number: 2 }),
          new Player({ number: 1 })
        ]
      })
    }
  }

  updatePlayer (updateData) {
    this.setState({ game: this.state.game.updatePlayer(updateData) })
  }

  setBackgroundColor () {
      const bottomBackgroundColors = {
      white : ['#FC9700', '#FFE292'/*, '#FFF4E4'*/].reverse(),
      blue  : ['#004394', '#009AD0'/*, '#E0F2FF'*/].reverse(),
      black : ['#4C0064', '#B3307E'/*, '#F5E5FF'*/].reverse(),
      red   : ['#94001A', '#E7093C'/*, '#FFE6EC'*/].reverse(),
      green : ['#01662C', '#82B300'/*, '#E7FFE5'*/].reverse(),
  		clear : 'hsl(  0,  0%, 100%)'
    }

    const topBackgroundColors = {
      white : ['#FC9700', '#FFE292'/*, '#FFF4E4'*/],
      blue  : ['#004394', '#009AD0'/*, '#E0F2FF'*/],
      black : ['#4C0064', '#B3307E'/*, '#F5E5FF'*/],
      red   : ['#94001A', '#E7093C'/*, '#FFE6EC'*/],
      green : ['#01662C', '#82B300'/*, '#E7FFE5'*/],
      clear : 'hsl(  0,  0%, 100%)'
  	}

    const { game } = this.state
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
    const { game } = this.state

    return (
      <div id="main_window" style={this.setBackgroundColor()}>

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

          <div id="token_list" className="layer">
            <div className="list">
              <h1>Choose Token<i className="fa fa-times" /></h1>
              <ul></ul>
            </div>
            <div className="artworks">
              <h1><i className="fa fa-arrow-left" />Choose Artwork<i className="fa fa-times" /></h1>
              <div className="cards" />
            </div>
          </div>

          <div id="cards" className="clearfix" />
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

export default HomePage
