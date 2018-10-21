var queryString = require('query-string')

module.exports = function () {
  // parse name to unUriEncode?
  return queryString.parse(window.location.search)
}