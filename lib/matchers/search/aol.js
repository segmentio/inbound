const querystring = require('querystring')

module.exports = (href, referrer) => {
  if (referrer.host && referrer.host.indexOf('aol.com') !== -1) {
    var description = { type: 'search', engine: 'aol' }
    var qs = querystring.parse(referrer.query)
    var query = qs.q || qs.encquery || qs.query
    if (query) description.query = query
    return description
  } else {
    return false
  }
}
