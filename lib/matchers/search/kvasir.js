const querystring = require('querystring')

module.exports = (href, referrer) => {
  if (referrer.host && referrer.host.indexOf('kvasir.no') !== -1) {
    var description = { type: 'search', engine: 'kvasir' }
    var query = querystring.parse(referrer.query).q
    if (query) description.query = query
    return description
  } else {
    return false
  }
}
