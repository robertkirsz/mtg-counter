import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions/fuelSavingsActions'

import { ColorWheel, Counter } from './'

function mapStateToProps({ gameState }) {
  return {
    counters: gameState.counters
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

const Player = ({ player, updatePlayer, actions, counters }) => {
  const chooseColor = (choosenColor) => {
    updatePlayer({
      playerNumber: player.number,
      dataToUpdate: {
        color: choosenColor
      }
    })
  }

  const gainLife = (amount = 1) => {
    updatePlayer({
      playerNumber: player.number,
      dataToUpdate: {
        life: player.life + amount
      }
    })
  }

  const loseLife = (amount = 1) => {
    updatePlayer({
      playerNumber: player.number,
      dataToUpdate: {
        life: player.life - amount
      }
    })
  }

  return (
    <div className={`player player_${player.number}`}>
      <ColorWheel
        onChooseColor={chooseColor}
        hidden={player.isDefined()}
      />
      <Counter
        type="life"
        value={player.life}
        onPlus={gainLife}
        onMinus={loseLife}
        hidden={!player.isDefined()}
      />
      <div className="other">
        {counters.poison ? <Counter type="poison" value={player.poisonCounters} /> : null}
        {counters.commander ? <Counter type="commander" value={player.commanderDamage} /> : null}
      </div>
    </div>
  )
}

Player.propTypes = {
  player: PropTypes.object,
  updatePlayer: PropTypes.func,
  actions: PropTypes.object,
  counters: PropTypes.object
}

// export default Player

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Player)
