var fw = require('friendly-words');

var enders = fw.collections.concat(fw.teams).concat(fw.objects)

module.exports = function () {
  var start = fw.predicates[~~(Math.random() * fw.predicates.length)]
  var end = enders[~~(Math.random() * fw.predicates.length)]
  return `${start}-${end}`;
}