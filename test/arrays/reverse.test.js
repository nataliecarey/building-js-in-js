import { describe, it } from 'node:test'
import assert from 'node:assert'
import createArrayFromItems from '../../src/arrays/02 - reverse.js'

const createArrayWithItems = (...items) => createArrayFromItems(...items)

describe('reverse', () => {
  it('should reverse an array', () => {
    const arr = createArrayWithItems(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
    assert.deepEqual(arr.reverse(), [10, 9, 8, 7, 6, 5, 4, 3, 2, 1])
  })
})
