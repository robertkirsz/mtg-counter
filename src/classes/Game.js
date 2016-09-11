export default class Game {
  constructor (game) {
    this.update(game);
  }

  update (raw) {
    if (raw.players)   this.players   = raw.players;
    if (raw.startDate) this.startDate = raw.startDate;
    if (raw.endDate)   this.endDate   = raw.endDate;

    // localStorage.setItem('unitPreference', this.unitPreference);
  }

  // Updates
  updatePlayer ({ playerNumber, dataToUpdate }) {
    const gameCopy = this.copy()
    const playerIndex = _.findIndex(gameCopy.players, { number: playerNumber })
    gameCopy.players[playerIndex].update(dataToUpdate)
    return gameCopy
  }

  copy () {
    return new Game(this);
  }
}
