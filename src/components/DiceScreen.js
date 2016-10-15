import React, { Component, PropTypes } from 'react'
import cn from 'classnames'

import { getRandomInt } from '../utils'

import { Die } from './'

class DiceScreen extends Component {
  constructor(props, context) {
    super(props, context)

    this.state = {
      player1Number: null,
      player2Number: null
    }
  }

  componentWillReceiveProps (nextProps) {
    // Roll the dice when this page is being shown
    if (this.props.hidden && !nextProps.hidden) {
      const newState = { ...this.state }

      do {
        newState.player1Number = getRandomInt(1, 6)
        newState.player2Number = getRandomInt(1, 6)
      } while (newState.player1Number === newState.player2Number)

      this.setState(newState)
    }
  }

  render () {
    const { hidden, actions } = this.props
    const { player1Number, player2Number } = this.state

    return (
      <div
        id="dice"
        className={cn('layer', { hidden })}
        onClick={() => { actions.changeScreen('diceScreen', 'close') }}
      >
        <Die className="player_2" number={player2Number} />
        <Die className="player_1" number={player1Number} />
      </div>
    )
  }
}

DiceScreen.propTypes = {
  hidden: PropTypes.bool,
  actions: PropTypes.object
}

DiceScreen.defaultProps = {
  hidden: true,
  actions: {}
}

export default DiceScreen
