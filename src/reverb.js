var loadSample2Buff = require('load-sample-2-buff')

module.exports = function (rng, ac, cb) {
  var convolver = ac.createConvolver()
  var impulseId = ~~(rng() * 10)

  loadSample2Buff(ac, `./assets/${impulseId}.wav`, function(buffer){
    convolver.buffer = buffer
    cb(convolver)
  })
  return convolver
}