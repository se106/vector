var M = module.exports = {}

M.sum = function (a) {
  var s = 0
  for (var x of a) {
    s += x
  }
  return s
}

console.log('M.sum=' + M.sum([1, 2, 3]))
