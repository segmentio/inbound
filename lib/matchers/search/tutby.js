const querystring = require('querystring')

module.exports = (href, referrer) => {
  if (referrer.host && referrer.host.indexOf('search.tut.by') !== -1) {
    var description = { type: 'search', engine: 'tut.by' }
    var query = querystring.parse(referrer.query).query
    if (query) description.query = query
    return description
  } else {
    return false
  }
}
