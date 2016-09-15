export default class Player {
  constructor (player) {
    this.poisonCounters = 0
    this.commanderDamage = 0
    this.update(player)
  }

  update (raw) {
    if (raw.number) this.number = raw.number
    if (raw.name)   this.name   = raw.name
    if (raw.color)  this.color  = raw.color
    if (typeof raw.life === 'number')
      this.life = raw.life
    if (typeof raw.poisonCounters === 'number')
      this.poisonCounters  = raw.poisonCounters
    if (typeof raw.commanderDamage === 'number')
      this.commanderDamage = raw.commanderDamage
    if (raw.lifeBackup) this.lifeBackup = raw.lifeBackup

    // localStorage.setItem('unitPreference', this.unitPreference)
  }

  isDefined () {
    return this.color && typeof this.life === 'number'
  }

  copy () {
    return new Player(this)
  }
}
