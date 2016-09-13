import { Game, Player } from '../classes'

export default {
  fuelSavings: {
    newMpg: '',
    tradeMpg: '',
    newPpg: '',
    tradePpg: '',
    milesDriven: '',
    milesDrivenTimeframe: 'week',
    displayResults: false,
    dateModified: null,
    necessaryDataIsProvidedToCalculateSavings: false,
    savings: {
      monthly: 0,
      annual: 0,
      threeYear: 0
    }
  },
  gameState: {
    game: new Game({
      players: [
        new Player({ number: 2 }),
        new Player({ number: 1 })
      ]
    }),
    settingsPanel: false,
    counters: {
      life: false,
      poison: false,
      commander: false
    }
  }
}
