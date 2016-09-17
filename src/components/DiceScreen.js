import React, { PropTypes } from 'react'
import cn from 'classnames'

const DiceScreen = ({ hideScreen, actions }) => {
  return (
    <div
      id="dice"
      className={cn('layer', { hidden: hideScreen })}
      onClick={() => { actions.toggleScreen('dice') }}
    >
      <div className="die player_2">6</div>
      <div className="die player_1">3</div>
    </div>
  )
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
