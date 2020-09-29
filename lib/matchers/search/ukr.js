const querystring = require('querystring')

module.exports = (href, referrer) => {
  if (referrer.host && referrer.host.indexOf('search.ukr.net') !== -1) {
    const description = { type: 'search', engine: 'ukr' }
    const query = querystring.parse(referrer.query).q
    if (query) description.query = query
    return description
  }
  return false
}
