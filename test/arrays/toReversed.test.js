import { describe, it, afterEach } from 'node:test'
import assert from 'node:assert'
import createArrayFromItems, { resetArrayPrototype } from '../../src/arrays/03 - toReversed.js'

const createArrayWithItems = (...items) => createArrayFromItems(...items)

describe('reverse', () => {
  afterEach(() => {
    resetArrayPrototype()
  })
  it('should reverse an array', () => {
    const arr = createArrayWithItems(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
    const reversed = arr.toReversed()
    assert.deepEqual(reversed, [10, 9, 8, 7, 6, 5, 4, 3, 2, 1])
    assert.deepEqual(arr, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
  })
})
