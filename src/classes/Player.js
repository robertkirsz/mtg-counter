export default class Player {
  constructor (player) {
    this.update(player);
  }

  update (raw) {
    if (raw.number) this.number = raw.number;
    if (raw.name)   this.name   = raw.name;
    if (raw.color)  this.color  = raw.color;
    if (raw.life)   this.life   = raw.life;
    if (raw.poisonCounters)   this.poisonCounters  = raw.poisonCounters;
    if (raw.commanderDamage)  this.commanderDamage = raw.commanderDamage;

    // localStorage.setItem('unitPreference', this.unitPreference);
  }

  copy () {
    return new Player(this);
  }
}
