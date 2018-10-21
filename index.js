var getQueryObject = require('./src/queryObject')
var makeName = require('./src/makeName')
var makeRng = require('./src/rng')
var makePalette = require('./src/palette')
var makeAudioGraph = require('./src/audioGraph')
var makeAudioUi = require('./src/audioUi')
var makeKeyControls = require('./src/keyControls')
var makeStylesheet = require('./src/stylesheet')
var makeReverb = require('./src/reverb')
var getScale = require('./src/scale')
var getRoot = require('./src/root')

var ac = new (window.AudioContext || window.webkitAudioContext)()
var container = document.createElement('div')
container.setAttribute('class', 'synth-container')

var queryObject = getQueryObject() // grab query string data for overriding defaults
var name = queryObject.name || makeName() // use name from query string, or pick a random one

var rng = makeRng(name) // create an RNG, using the name as a seed

var palette = makePalette(rng) // grab a random color palette, using seeded rng

var root = getRoot(rng, queryObject.root) // get a random playbackRate between 0.5 and 2.0
var scale = getScale(rng, queryObject.scale) // use scale from queryString, or pick a random one

var audioGraph = makeAudioGraph(rng, ac) // generate a random audio graph
var reverb = makeReverb(rng, ac, function (reverb) {
  
}) // generate a reverb node to put at the end of the graph


// stuff to append
var stylesheet = makeStylesheet(rng, palette) // build a big <style> tag using the palette
var audioUi = makeAudioUi(audioGraph) // make UI controls for each node in the graph
var keyControls = makeKeyControls(audioUi, root, scale) // bind keyboard to UI

// container.appendChild(audioUi)
document.head.appendChild(stylesheet)
document.body.appendChild(container)