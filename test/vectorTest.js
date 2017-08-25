var assert = require('assert')
var m = require('../src/vector')

describe('vector', function () {
  it('sum([1,2,3]=6', function () {
    assert.equal(m.sum([1, 2, 3]), 6)
  })
  it('sum([3,3,3,3]=12', function () {
    assert.equal(m.sum([3, 3, 3, 3]), 12)
  })
})
