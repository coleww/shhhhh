var getQueryObject = require('./src/queryObject')
var makeName = require('./src/makeName')
var makeRng = require('./src/rng')
var makePalette = require('./src/palette')
var makeAudioGraph = require('./src/audioGraph')
var makeAudioUi = require('./src/audioUi')
var makeKeyControls = require('./src/keyControls')
var makeStylesheet = require('./src/stylesheet')
var makeReverb = require('./src/makeReverb')

var queryObject = getQueryObject() // grab query string data for overriding defaults

var name = queryObject.name || makeName() // use name from query string, or make a random one

var rng = makeRng(name) // create an RNG, using the name as a seed

var palette = makePalette(rng) // grab a random color palette, using seeded rng

var audioGraph = makeAudioGraph(rng) // generate a random audio graph

// stuff to append
var audioUi = makeAudioUi(audioGraph) // make UI controls for each node in the graph
var keyControls = makeKeyControls(audioUi)
var stylesheet = makeStylesheet(rng, palette)

