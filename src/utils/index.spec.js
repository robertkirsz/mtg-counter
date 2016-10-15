import { expect } from 'chai'
import { getRandomInt, isNotEmptyArray } from './'

describe('getRandomInt', () => {
	it('should return random number from between two values', () => {
    expect(getRandomInt(3, 10)).to.be.within(3, 10)
	})
})

describe('isNotEmptyArray', () => {
	it('should check if value is an array and is not empty', () => {
    expect(isNotEmptyArray(2)).to.be.false
    expect(isNotEmptyArray([])).to.be.false
    expect(isNotEmptyArray([3])).to.be.true
  })
})
