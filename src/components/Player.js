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

  return (
    <div className={`player player_${player.number}`}>
      {player.life === undefined ? <ColorWheel playerColor={player.color} onChooseColor={chooseColor} /> : null}
      {player.life !== undefined ? <Counter type="life" value={player.life} /> : null}
      <div className="other">
        <Counter type="poison" value={player.poisonCounters} />
        <Counter type="commander" value={player.commanderDamage} />
      </div>
    </div>
  )
}

Player.propTypes = {
  player: PropTypes.object,
  updatePlayer: PropTypes.func
}

export default Player
