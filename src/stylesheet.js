var numTextures = 26
var texturePath = './assets/imgs/'
var textureType = '.jpg'

module.exports = function (rng, palette) {
  var styles = {}

  var textureId = ~~(rng() * numTextures)
  var texturePath = `${texturePath}${textureId}${textureType}`

  // make a <style> element to append to the page

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


// {
//   "synth-container": [
//     ""
//   ]
// }
// .synth-container
