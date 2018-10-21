// playbackRate for audio buffers, random value between halfspeed and doublespeed
module.exports = function (rng, root) {
  return root ? Number(root) : (0.5 + (rng() * 1.5))
}