import { expect } from 'chai'
import { settingsPanel } from './'

describe('Redux action', () => {
  it('should be a function', () => {
    expect(settingsPanel).to.be.a('function')
  }),
  it('should return a type', () => {
    expect(settingsPanel().type).to.exist
  }),
  it('type should a string', () => {
    expect(settingsPanel().type).to.be.a('string')
  }),
  it('should return passed values', () => {
    const input = 'ABC'
    expect(settingsPanel(input).action).to.equal(input)
  })
})
