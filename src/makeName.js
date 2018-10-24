var markov = require('fast-ish-markov')

// TODO: probably do something better
var words = []
  .concat(require('./textData/animals'))
  .concat(require('./textData/flowers'))
  .concat(require('./textData/instruments'))
  .concat(require('./textData/planets'))
  .map(function (word) {
    return word.split('').join(' ').replace(/\s\s\s/, ' ')
  })

function makeBigNumber() {
  var numbers = [2, 4, 5, 888, 1000, 2000, 5000, 10000, 100000, 100000000, 101, 202, 303, 404, 505, 606, 707, 808, 909]
  return numbers[~~(Math.random() * numbers.length)]
}

module.exports = function () {
  var ngram = 3 + ~~(Math.random() * 3)
  var m = markov(words, ngram)
  var length = 2 + ~~(Math.random() * 10)
  var name = m.fill(m.pick(), 15).replace(/\s/g, '')
  if (Math.random() < 0.5) name += makeBigNumber()
  return name
}