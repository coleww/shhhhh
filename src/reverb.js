var loadSample2Buff = require('load-sample-2-buff')
var impulsePath = './assets/impulses/'
var impulseType = '.wav'

module.exports = function (rng, ac, cb) {
  var convolver = ac.createConvolver()
  var impulseId = ~~(rng() * 10)

  loadSample2Buff(ac, `${impulsePath}${impulseId}${impulseType}`, function(buffer){
    convolver.buffer = buffer
    cb(convolver)
  })
  return convolver
}