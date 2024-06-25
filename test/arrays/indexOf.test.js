import { describe, it, beforeEach } from 'node:test'
import assert from 'node:assert'
import createArrayFromItems from '../../src/arrays/01 - indexOf.js'

const createArrayWithItems = (...items) => createArrayFromItems(...items)

describe('indexOf', () => {
  let testScope
  beforeEach(() => {
    testScope = {}
  })
  describe('simple values - strings', () => {
    it('should find an element when it exists (first)', () => {
      const arr = createArrayWithItems('a', 'b', 'c')
      assert.equal(arr.indexOf('a'), 0)
    })
    it('should find an element when it exists (second)', () => {
      const arr = createArrayWithItems('a', 'b', 'c')
      assert.equal(arr.indexOf('b'), 1)
    })
    it('should find an element when it exists (thrid)', () => {
      const arr = createArrayWithItems('a', 'b', 'c')
      assert.equal(arr.indexOf('c'), 2)
    })
    it("should not find an element when it doesn't exist", () => {
      const arr = createArrayWithItems('a', 'b', 'c')
      assert.equal(arr.indexOf('d'), -1)
    })
    it('should find the first index when there are duplicates', () => {
      const arr = createArrayWithItems('a', 'b', 'c', 'a', 'b', 'c', 'a', 'b', 'c', 'a', 'b', 'c')
      assert.equal(arr.indexOf('b'), 1)
    })
    it('should find the first index after start when starting index is supplied', () => {
      const arr = createArrayWithItems('a', 'b', 'c', 'a', 'b', 'c', 'a', 'b', 'c', 'a', 'b', 'c')
      assert.equal(arr.indexOf('b', 5), 7)
    })
    it('should find the index at start when starting index matches supplied', () => {
      const arr = createArrayWithItems('a', 'b', 'c', 'a', 'b', 'c', 'a', 'b', 'c', 'a', 'b', 'c')
      assert.equal(arr.indexOf('b', 7), 7)
    })
    it('should match longer strings', () => {
      const arr = createArrayWithItems('To be or not to be', 'that is the question', 'whether it is nobler to remember Shakespear quotes', 'or to misquote them')
      assert.equal(arr.indexOf('that is the question'), 1)
    })
  })
  describe('simple values - numbers', () => {
    beforeEach(() => {
      testScope.arr = createArrayWithItems(42, 19, 3)
    })
    it('should find an element when it exists (first)', () => {
      assert.equal(testScope.arr.indexOf(42), 0)
    })
    it('should find an element when it exists (second)', () => {
      assert.equal(testScope.arr.indexOf(19), 1)
    })
    it('should find an element when it exists (thrid)', () => {
      assert.equal(testScope.arr.indexOf(3), 2)
    })
    it("should not find an element when it doesn't exist", () => {
      assert.equal(testScope.arr.indexOf(4), -1)
    })
  })
  describe('simple values - numbers', () => {
    beforeEach(() => {
      testScope.a = { objectsAreIntentionallyIdentical: true }
      testScope.b = { objectsAreIntentionallyIdentical: true }
      testScope.c = { objectsAreIntentionallyIdentical: true }
      testScope.arr = createArrayWithItems(testScope.a, testScope.b, testScope.c)
    })
    it('should find an element when it exists (first)', () => {
      assert.equal(testScope.arr.indexOf(testScope.a), 0)
    })
    it('should find an element when it exists (second)', () => {
      assert.equal(testScope.arr.indexOf(testScope.b), 1)
    })
    it('should find an element when it exists (thrid)', () => {
      assert.equal(testScope.arr.indexOf(testScope.c), 2)
    })
    it("should not find an element when it doesn't exist", () => {
      assert.equal(testScope.arr.indexOf({}), -1)
    })
  })
})
