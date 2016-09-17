import { Game, Player } from '../classes'

export default {
  game: new Game({
    players: [
      new Player({ number: 2 }),
      new Player({ number: 1 })
    ]
  }),
  settingsPanel: false,
  diceScreen: false,
  counters: {
    life: false,
    poison: false,
    commander: false
  }
}
