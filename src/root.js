// playbackRate for audio buffers, random value between halfspeed and doublespeed
module.exports = function (rng) {
  return 0.5 + (rng() * 1.5)
}