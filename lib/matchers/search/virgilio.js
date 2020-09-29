const querystring = require('querystring')

module.exports = (href, referrer) => {
  if (referrer.host && referrer.host.indexOf('search.virgilio.it') !== -1) {
    const description = { type: 'search', engine: 'virgilio' }
    const query = querystring.parse(referrer.query).qs
    if (query) description.query = query
    return description
  }
  return false
}
