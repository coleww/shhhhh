var getQueryObject = require('./src/queryObject')
var makeName = require('./src/makeName')
var makeRng = require('./src/rng')
var makePalette = require('./src/palette')
var makefxGraph = require('./src/fxGraph')
var makeAudioUi = require('./src/audioUi')
var makeKeyControls = require('./src/keyControls')
var makeMotionControls = require('./src/motionControls')
var makeStylesheet = require('./src/stylesheet')
var makeReverb = require('./src/reverb')
var makeLoopers = require('./src/loopers')
var getScale = require('./src/scale')
var getRoot = require('./src/root')

var queryObject = getQueryObject() // grab query string data for overriding defaults
var name = queryObject.name || makeName() // use name from query string, or pick a random one

var container = document.createElement('div')
container.setAttribute('class', 'synth-container')

var title = document.createElement('div')
title.setAttribute('class', 'synth-title')
title.textContent = name 

var knobs = document.createElement('div')
knobs.setAttribute('class', 'synth-knobs')

var buttons = document.createElement('div')
buttons.setAttribute('class', 'synth-buttons')

var ac = new (window.AudioContext || window.webkitAudioContext)()


var rng = makeRng(name) // create an RNG, using the name as a seed.

var palette = makePalette(rng) // grab a random color palette, using seeded rng
var root = getRoot(rng, queryObject.root) // get a random playbackRate between 0.5 and 2.0
var scale = getScale(rng, queryObject.scale) // use scale from queryString, or pick a random one

var fxGraph = makefxGraph(rng, ac) // generate a random FX chain
var reverb = makeReverb(rng, ac) // generate a reverb node to put at the end of the graph
var loopers = makeLoopers(rng, ac, function (bufferNodes) {
  makeAudioUi(bufferNodes).forEach(knobs.appendChild.bind(knobs))
}) // generate 2 looping buffer nodes as audio source
var adsrGain = ac.createGain()

loopers[0].connect(adsrGain)
loopers[1].connect(adsrGain)
adsrGain.connect(fxGraph[0])
fxGraph[fxGraph.length - 1].connect(reverb)
reverb.connect(ac.destination)

// stuff to append
var stylesheet = makeStylesheet(rng, palette) // build a big <style> tag using the palette
var audioUi = makeAudioUi(fxGraph) // make UI controls for each node in the graph
var keyControls = makeKeyControls(rng, knobs, buttons, root, scale) // bind keyboard to UI
makeMotionControls()


audioUi.forEach(knobs.appendChild.bind(knobs))

keyControls.forEach(buttons.appendChild.bind(buttons))


container.appendChild(title)
container.appendChild(buttons)
container.appendChild(knobs)
document.body.appendChild(stylesheet)
document.getElementById("main").appendChild(container)

console.log({palette, root, scale, name})