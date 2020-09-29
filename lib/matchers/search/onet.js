const querystring = require('querystring')

module.exports = (href, referrer) => {
  if (referrer.host && referrer.host.indexOf('szukaj.onet.pl') !== -1) {
    const description = { type: 'search', engine: 'onet' }
    const qs = querystring.parse(referrer.query)
    const query = qs.q || qs.qt
    if (query) description.query = query
    return description
  }
  return false
}
