var minor = [-1200, -1000, -900, -700, -500, -400, -200, 0, 200, 300, 500, 700, 800, 1000, 1200]
var major = [-1200, -1000, -800, -700, -500, -300, -100, 0, 200, 400, 500, 700, 900, 1100, 1200]
var pentMaj = []
var pentMin = []
var blues = []
var scales = [minor, major, pentMaj, pentMin, blues]

module.exports = function (rng) {
  return scales[~~(rng() * scales.length)]
}