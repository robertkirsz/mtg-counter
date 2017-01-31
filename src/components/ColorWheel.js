import React, { PropTypes } from 'react'
import cn from 'classnames'

const manaColors = ['white', 'blue', 'black', 'red', 'green']

const ColorWheel = ({ hidden, onChooseColor }) => {
  return (
    <div className={cn(
      'color-wheel',
      { hidden: hidden }
    )}>
      {
        manaColors.map(manaColor => (
          <img
            key={manaColor}
            className={manaColor}
            src={`img/ikony/${manaColor}_mana.png`}
            alt="Mana symbol"
            onClick={() => { onChooseColor(manaColor) }}
          />
        ))
      }
    </div>
  )
}

ColorWheel.propTypes = {
  hidden: PropTypes.bool,
  onChooseColor: PropTypes.func
}

export default ColorWheel
