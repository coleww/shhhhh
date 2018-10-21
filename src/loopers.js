var loadSample2Buff = require('load-sample-2-buff')


var loopPath = './assets/loops/'
var loopType = '.wav'
var loopCount = 3

module.exports = function (rng, ac) {
  var bufferSourceA = ac.createBufferSource()
  var bufferSourceB = ac.createBufferSource()

  var loopAId = ~~(rng() * loopCount), loopBId
  do { 
    loopBId = ~~(rng() * loopCount) 
  } while (loopAId === loopBId) 
  console.log(loopAId, loopBId)

  loadSample2Buff(ac, `${loopPath}${loopAId}${loopType}`, function(buffer){
    bufferSourceA.buffer = buffer
    bufferSourceA.loop = true
    bufferSourceA.start()
  })

  loadSample2Buff(ac, `${loopPath}${loopBId}${loopType}`, function(buffer){
    bufferSourceB.buffer = buffer
    bufferSourceB.loop = true
    bufferSourceB.start()
  })

  return [bufferSourceA, bufferSourceB]
}