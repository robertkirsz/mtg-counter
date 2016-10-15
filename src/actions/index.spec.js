import { expect } from 'chai'
import { changeScreen } from './'

describe('Redux action', () => {
  it('should be a function', () => {
    expect(changeScreen).to.be.a('function')
  }),
  it('should return a type', () => {
    expect(changeScreen().type).to.exist
  }),
  it('type should a string', () => {
    expect(changeScreen().type).to.be.a('string')
  }),
  it('should return passed values', () => {
    const input = 'ABC'
    expect(changeScreen(input).screenName).to.equal(input)
  })
})
