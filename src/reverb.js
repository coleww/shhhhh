var loadSample2Buff = require('load-sample-2-buff')
var impulsePath = './assets/impulses/'
var impulseType = '.wav'
var impulseCount = 10

module.exports = function (rng, ac) {
  var convolver = ac.createConvolver()
  var impulseId = ~~(rng() * impulseCount)

  loadSample2Buff(ac, `${impulsePath}${impulseId}${impulseType}`, function(buffer){
    convolver.buffer = buffer
  })
  return convolver
}