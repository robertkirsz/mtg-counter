import React, { Component, PropTypes } from 'react'
import cn from 'classnames'

// Get random number from 1 to 'x'
const randomNumber = x => {
  console.log('RAND')
  return Math.floor((Math.random() * x) + 1)
}

const Die = ({ number, className }) => {
  return <div className={cn('die', className)}>{number}</div>
}

Die.propTypes = {
  number: PropTypes.number,
  className: PropTypes.string
}

Die.defaultProps = {
  number: 0,
  className: ''
}

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
    if (this.props.hideScreen && !nextProps.hideScreen) {
      this.setState({
        player1Number: randomNumber(6),
        player2Number: randomNumber(6)
      })
    }
  }

  render () {
    const { hideScreen, actions } = this.props
    const { player1Number, player2Number } = this.state

    return (
      <div
        id="dice"
        className={cn('layer', { hidden: hideScreen })}
        onClick={() => { actions.toggleScreen('dice') }}
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
