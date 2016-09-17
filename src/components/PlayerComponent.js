import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions'

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

const PlayerComponent = ({ player, actions, counters }) => {
  const chooseColor = (choosenColor) => {
    actions.updatePlayer({
      playerNumber: player.number,
      dataToUpdate: {
        color: choosenColor
      }
    })
  }
  const gainLife = (amount = 1) => {
    actions.updatePlayer({
      playerNumber: player.number,
      dataToUpdate: {
        life: player.life + amount
      }
    })
  }
  const loseLife = (amount = 1) => {
    actions.updatePlayer({
      playerNumber: player.number,
      dataToUpdate: {
        life: player.life - amount
      }
    })
  }
  const addPoisonCounter = (amount = 1) => {
    actions.updatePlayer({
      playerNumber: player.number,
      dataToUpdate: {
        poisonCounters: player.poisonCounters + amount
      }
    })
  }
  const removePoisonCounter = (amount = 1) => {
    actions.updatePlayer({
      playerNumber: player.number,
      dataToUpdate: {
        poisonCounters: player.poisonCounters - amount
      }
    })
  }
  const addCommanderDamage = (amount = 1) => {
    actions.updatePlayer({
      playerNumber: player.number,
      dataToUpdate: {
        commanderDamage: player.commanderDamage + amount,
        life: player.life - amount
      }
    })
  }
  const removeCommanderDamage = (amount = 1) => {
    actions.updatePlayer({
      playerNumber: player.number,
      dataToUpdate: {
        commanderDamage: player.commanderDamage - amount,
        life: player.life + amount
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
        <Counter
          type="poison"
          value={player.poisonCounters}
          onPlus={addPoisonCounter}
          onMinus={removePoisonCounter}
          hidden={!player.color || !counters.poison}
        />
        <Counter
          type="commander"
          value={player.commanderDamage}
          onPlus={addCommanderDamage}
          onMinus={removeCommanderDamage}
          hidden={!player.color || !counters.commander}
        />
      </div>
    </div>
  )
}

PlayerComponent.propTypes = {
  player: PropTypes.object,
  actions: PropTypes.object,
  counters: PropTypes.object
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayerComponent)
