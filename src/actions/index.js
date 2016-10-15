export const changeScreen = (screenName, actionType) => ({
  type: 'CHANGE_SCREEN',
  screenName,
  actionType
})

export const showCounters = (counterType) => ({
  type: 'SHOW_COUNTERS',
  counterType
})

export const updatePlayer = ({ playerNumber, dataToUpdate }) => ({
  type: 'UPDATE_PLAYER',
  playerNumber,
  dataToUpdate
})

export const resetGame = () => ({
  type: 'RESET_GAME'
})

export const newGame = () => ({
  type: 'NEW_GAME'
})

export const changeMainClasses = (classNames) => ({
  type: 'CHANGE_MAIN_CLASSES',
  classNames
})
