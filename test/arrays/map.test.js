import { describe, it, afterEach } from 'node:test'
import assert from 'node:assert'
import createArrayFromItems, { resetArrayPrototype } from '../../src/arrays/04 - map.js'

const createArrayWithItems = (...items) => createArrayFromItems(...items)

describe('map', () => {
  afterEach(() => {
    resetArrayPrototype()
  })
  it('should add one to each number', () => {
    const arr = createArrayWithItems(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
    const mapFn = (value) => value + 1
    assert.deepEqual(arr.map(mapFn), [2, 3, 4, 5, 6, 7, 8, 9, 10, 11])
  })
  it('should number items', () => {
    const arr = createArrayWithItems('Go to the shop', 'put items in basket', 'pay', 'leave')
    const mapFn = (value, index) => `${index + 1}: ${value}`
    assert.deepEqual(arr.map(mapFn), ['1: Go to the shop', '2: put items in basket', '3: pay', '4: leave'])
  })
  it('should have access to original array', () => {
    const arr = createArrayWithItems('Go to the shop', 'put items in basket', 'pay', 'leave')
    const mapFn = (value, index, originalArray) => originalArray
    const result = arr.map(mapFn)
    assert.equal(result[0], arr)
    assert.equal(result[1], arr)
    assert.equal(result[2], arr)
    assert.equal(result[3], arr)
  })
  it('allow setting the "this" value', () => {
    const arr = createArrayWithItems('Go to the shop', 'put items in basket', 'pay', 'leave')
    const mapFn = function (value, index) {
      return `${index + 1}${this.separator} ${value}`
    }
    assert.deepEqual(arr.map(mapFn, { separator: '---' }), ['1--- Go to the shop', '2--- put items in basket', '3--- pay', '4--- leave'])
  })
  it('should not mutate input array', () => {
    const arr = createArrayWithItems('hello', 'world')
    const mapFn = (value) => value.toUpperCase()
    assert.deepEqual(arr.map(mapFn), ['HELLO', 'WORLD'])
    assert.deepEqual(arr, ['hello', 'world'])
  })
})
