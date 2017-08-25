var assert = require('assert')
var M = module.exports = {}

M.sum = function (a) {
  var s = 0
  for (var x of a) {
    s += x
  }
  return s
}

M.add = function (a, b) {
  var c = []
  for (var i = 0; i < a.length; i++) {
    c.push(a[i] + b[i])
  }
  return c
}
