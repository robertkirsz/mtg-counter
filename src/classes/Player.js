export default class Player {
  constructor (player) {
    this.update(player);
  }

  update (raw) {
    if (raw.number) this.number = raw.number;
    if (raw.name)   this.name   = raw.name;
    if (raw.life)   this.life   = raw.life;

    // localStorage.setItem('unitPreference', this.unitPreference);
  }

  copy () {
    return new Player(this);
  }
}
