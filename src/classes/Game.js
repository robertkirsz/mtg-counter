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

  copy () {
    return new Game(this);
  }
}
