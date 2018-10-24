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
    "screen", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "exclusion"
  ]
  var blendMode = blendModes[~~(rng() * blendModes.length)]


  styles['synth-container'] = [
    'width: fit-content',
    'height: fit-content',
    'padding: 50px',
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

  styles['synth-knobs'] = [
    `background-color: ${highlightColor}`,
    `color: ${shadowColor}`,
    'width: fit-content',
    `border-radius: ${rng() * 25}% ${rng() * 25}% ${rng() * 25}% ${rng() * 25}%`,
  ]

  styles['synth-buttons'] = [
    `background-color: ${outlineColor}`,
    `color: ${textColor}`,
    'width: fit-content',
    `border-radius: ${rng() * 25}% ${rng() * 25}% ${rng() * 25}% ${rng() * 25}%`,
  
  ]


  var keyTextureId = ~~(rng() * numTextures)
  var keyBlendMode = blendModes[~~(rng() * blendModes.length)]

  styles['pitched-key'] = [
    `border-radius: ${rng() * 13}% ${rng() * 13}% ${rng() * 13}% ${rng() * 13}%`,
    
    `background-color: ${shadowColor}`,

    `background-blend-mode: ${blendMode}`,
    `background-image: url("${texturePath}${keyTextureId}${textureType}")`,
    'background-repeat: repeat',
    
    `color: ${textColor}`,
    'width: 50px',
    'height: 50px',
    'font-size: 30px',
    'font-weight: bold'
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
