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
      <ColorWheel playerColor={player.color} onChooseColor={chooseColor} />
      <Counter type="life" />
      <div className="other">
        <Counter type="poison" />
        <Counter type="commander" />
      </div>
    </div>
  )
}

Player.propTypes = {
  player: PropTypes.object,
  updatePlayer: PropTypes.func
}

export default Player
