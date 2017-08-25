var assert = require('assert')
var m = require('../src/vector')

describe('vector', function () {
  describe('sum', function () {
    it('sum([1,2,3]=6', function () {
      assert.equal(m.sum([1, 2, 3]), 6)
    })
    it('sum([3,3,3,3]=12', function () {
      assert.equal(m.sum([3, 3, 3, 3]), 12)
    })
  })
  describe('add', function () {
    it('add([1,2,3],[1,1,1])=[2,3,4]', function () {
      assert.deepEqual(m.add([1, 2, 3], [1, 1, 1]), [2, 3, 4])
    })
  })
})
