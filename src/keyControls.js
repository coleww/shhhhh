var triggerChange = require('trigger-change')

var letters = 'abcdefghgfedcba'.split('')
var bigLetters = 'ABCDEFGHGFEDCBA'.split('')
var nums = '123456787654321'.split('')
var stuff = '!@#$%^&*&^%$#@!'.split('')
var emoji = '👽😎🧙‍♀️🐱🐳🌲👻💖👻🌲🐳🐱🧙‍♀️😎👽'.split('')
var arrows = '>>>>>>>o<<<<<<<'.split('')

var texts = [letters, bigLetters, nums, stuff, emoji, arrows]

module.exports = function (rng, knobs, buttons, root, scale) {
  var text = texts[~~(rng() * texts.length)]
  var pitchedKeys = []
  for (var i = 0; i < 15; i++) {
    var pitchedKey = document.createElement('button')
    pitchedKey.setAttribute('class', 'pitched-key')
    pitchedKey.setAttribute('data-idx', i)
    pitchedKey.textContent = text[i]
    pitchedKeys.push(pitchedKey)
  }

  buttons.addEventListener('click', function (evt) {
    if (evt.target.classList.contains('pitched-key')) {
      var idx = Number(evt.target.dataset.idx)
      var detuneVal = scale[idx]
      var detunes = knobs.querySelectorAll('.audio-buffer-source .detune-range')
      ;[].forEach.call(detunes, function (detune) {
        // console.log(detuneVal)
        // detune.value = detuneVal
        triggerChange(detune, detuneVal)
      })

    }
    
    console.log(typeof idx === 'number')
    // if  {
    //   console.log('poo')
    // }

  })




  return pitchedKeys
}

// A-K, Z-M controls notes (15 in minor/maj, extendy for others) (find all the els that are buffers, target all the detune ranges. party.)
// Q-P 10 keys, moving 5 params up/down?...inspect the elements to see what they are DUH!

// 25 total. mobile view is a 5x5 grid? biggest square possible with header/footer ig?


