import React, { PropTypes } from 'react'

import { ColorWheel, Counter } from './'

const Player = ({ player, updatePlayer }) => {
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
        playerColor={player.color}
        onChooseColor={chooseColor}
      />
      <Counter
        type="life"
        value={player.life}
        onPlus={gainLife}
        onMinus={loseLife}
        hidden={typeof player.life !== 'number'}
      />
      <div className="other">
        {player.poisonCounters !== undefined ? <Counter type="poison" value={player.poisonCounters} /> : null}
        {player.commanderDamage !== undefined ? <Counter type="commander" value={player.commanderDamage} /> : null}
      </div>
    </div>
  )
}

Player.propTypes = {
  player: PropTypes.object,
  updatePlayer: PropTypes.func
}

export default Player
