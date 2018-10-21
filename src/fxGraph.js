
module.exports = function (rng, ac) {
  var nodes = []
// TODO: add more fx types!
  var filter = ac.createBiquadFilter()
  filter.type = ['lowpass', 'highpass', 'bandpass'][~~(rng() * 3)]
  nodes.push(filter)

  var delay = ac.createDelay()
  delay.delayTime.value = rng() * 8
  nodes.push(delay)

  var gain = ac.createGain()
  gain.gain.value = 0.3
  nodes.push(gain)

  filter.connect(delay)
  delay.connect(gain)
  return nodes
}