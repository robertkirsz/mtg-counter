import _ from 'lodash'
import { Player } from './'

export default class Game {
  constructor (game) {
    this.update(game)
  }

  update (raw) {
    if (raw.players)   this.players   = _.map(raw.players, player => new Player(player))
    if (raw.startDate) this.startDate = raw.startDate
    if (raw.endDate)   this.endDate   = raw.endDate
  }

  // Updates
  updatePlayer ({ playerNumber, dataToUpdate }) {
    const gameCopy = this.copy()
    const playerIndex = _.findIndex(gameCopy.players, { number: playerNumber })
    const playerObject = gameCopy.players[playerIndex]
    // If we're changing color of a new player, set his life as well
    if (!playerObject.color && dataToUpdate.color) dataToUpdate.life = 20
    playerObject.update(dataToUpdate)
    return gameCopy
  }

  copy () {
    return new Game(this)
  }
}
