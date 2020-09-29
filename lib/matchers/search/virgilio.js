const querystring = require('querystring')

module.exports = (href, referrer) => {
  if (referrer.host && referrer.host.indexOf('search.virgilio.it') !== -1) {
    var description = { type: 'search', engine: 'virgilio' }
    var query = querystring.parse(referrer.query).qs
    if (query) description.query = query
    return description
  } else {
    return false
  }
}
