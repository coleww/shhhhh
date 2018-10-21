var palettes = require('nice-color-palettes/1000')

module.exports = function (rng) {
  return palettes[~~(rng() * palettes.length)]
}