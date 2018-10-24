var loadSample2Buff = require('load-sample-2-buff')


var loopPath = './assets/loops/'
var loopType = '.wav'
var loopCount = 23

module.exports = function (rng, ac, cb) {
  var loaded = 0
  var bufferSourceA = ac.createBufferSource()
  var bufferSourceB = ac.createBufferSource()

  var loopAId = ~~(rng() * loopCount), loopBId
  do { 
    loopBId = ~~(rng() * loopCount) 
  } while (loopAId === loopBId) 

  var loaded = 0
  function handleBuff (bufferSource, buffer) {
    bufferSource.buffer = buffer
    bufferSource.loop = true
    bufferSource.start()
    if (loaded++) cb([bufferSourceA, bufferSourceB])
  }

  loadSample2Buff(ac, `${loopPath}${loopAId}${loopType}`, handleBuff.bind(null, bufferSourceA))
  loadSample2Buff(ac, `${loopPath}${loopBId}${loopType}`, handleBuff.bind(null, bufferSourceB))

  return [bufferSourceA, bufferSourceB]
}