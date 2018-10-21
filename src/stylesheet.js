var numTextures = 26
var texturePath = './assets/imgs/'
var textureType = '.jpg'

module.exports = function (rng, palette) {
  var backgroundHex = palette[0]
  var textColor = palette[1]
  var highlightColor = palette[2]
  var outlineColor = palette[3]
  var shadowColor = palette[4]

  var styles = {}
  var textureId = ~~(rng() * numTextures)
  var blendModes = [
    "multiply", "screen", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "exclusion"
  ]
  var blendMode = blendModes[~~(rng() * blendModes.length)]


  styles['synth-container'] = [
    'width: 100%',
    'height: 100%',
    `background-image: url("${texturePath}${textureId}${textureType}")`,
    'background-repeat: repeat',
    `border-radius: ${rng() * 33}% ${rng() * 33}% ${rng() * 33}% ${rng() * 33}%`,
    `background-color: ${backgroundHex}`, 
    `background-blend-mode: ${blendMode}`,
    'text-align: center',
    `border: 3px solid ${shadowColor}`
  ]

  styles['synth-title'] = [
    'margin-top: 10px',
    'text-align: center',
    'width: fit-content',
    `background-color: ${shadowColor}`,
    `border: 1px solid ${highlightColor}`,
    `color: ${textColor}`,
    `text-shadow: 4px 4px 8px ${highlightColor}`,
    'font-size: 50px',
    `border-radius: ${rng() * 50}% ${rng() * 50}% ${rng() * 50}% ${rng() * 50}%`,
    'padding: 15px',
    'display: inline-block'
  ]


  var sheet = document.createElement("style")
  sheet.innerHTML = styleStringify(styles)
  return sheet
}

function styleStringify (styleObject) {
  return Object.keys(styleObject).map(function (className) {
    var declarations = styleObject[className].join("; ")
    return `.${className} {${declarations}}`
  }).join(" ")
}
