const querystring = require('querystring')

module.exports = (href, referrer) => {
  if (referrer.host && referrer.host.indexOf('aol.com') !== -1) {
    const description = { type: 'search', engine: 'aol' }
    const qs = querystring.parse(referrer.query)
    const query = qs.q || qs.encquery || qs.query
    if (query) description.query = query
    return description
  }
  return false
}
