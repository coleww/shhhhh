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

var ac = new (window.AudioContext || window.webkitAudioContext)()


var queryObject = getQueryObject() // grab query string data for overriding defaults
var name = queryObject.name || makeName() // use name from query string, or pick a random one

var rng = makeRng(name) // create an RNG, using the name as a seed

var palette = makePalette(rng) // grab a random color palette, using seeded rng

var root = getRoot(rng, queryObject.root) // get a random playbackRate between 0.5 and 2.0
var scale = getScale(rng, queryObject.scale) // use scale from queryString, or pick a random one

var fxGraph = makefxGraph(rng, ac) // generate a random FX chain
var reverb = makeReverb(rng, ac) // generate a reverb node to put at the end of the graph
var loopers = makeLoopers(rng, ac) // generate 2 looping buffer nodes as audio source

loopers[0].connect(fxGraph[0])
loopers[1].connect(fxGraph[0])
fxGraph[fxGraph.length - 1].connect(reverb)
reverb.connect(ac.destination)

// stuff to append
var stylesheet = makeStylesheet(rng, palette) // build a big <style> tag using the palette
var audioUi = makeAudioUi(loopers.concat(fxGraph)) // make UI controls for each node in the graph
var keyControls = makeKeyControls(audioUi, root, scale) // bind keyboard to UI
makeMotionControls()



var container = document.createElement('div')
container.setAttribute('class', 'synth-container')

var title = document.createElement('div')
title.setAttribute('class', 'synth-title')
title.textContent = name 

container.appendChild(title)
console.log(audioUi)
audioUi.forEach(container.appendChild.bind(container))
document.body.appendChild(stylesheet)
document.getElementById("main").appendChild(container)

console.log({palette, root, scale, name})