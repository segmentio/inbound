const querystring = require('querystring')

module.exports = (href, referrer) => {
  if (referrer.host && referrer.host.indexOf('eniro.se') !== -1) {
    var description = { type: 'search', engine: 'eniro' }
    var query = querystring.parse(referrer.query).search_word
    if (query) description.query = query
    return description
  } else {
    return false
  }
}
