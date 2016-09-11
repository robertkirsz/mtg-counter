import React, { PropTypes } from 'react'
import cn from 'classnames'

const manaColors = ['white', 'blue', 'black', 'red', 'green'];

const ColorWheel = ({ playerColor, onChooseColor }) => {
  return (
    <div className="color-wheel">
      {
        manaColors.map(manaColor => (
          <img
            key={manaColor}
            className={cn(
              manaColor,
              { hidden: playerColor && playerColor !== manaColor }
            )}
            src={`img/ikony/${manaColor}_mana.png`}
            alt="Mana symbol"
            onClick={() => { onChooseColor(manaColor); }}
          />
        ))
      }
    </div>
  )
}

ColorWheel.propTypes = {
  playerColor: PropTypes.string,
  onChooseColor: PropTypes.func
}

export default ColorWheel
