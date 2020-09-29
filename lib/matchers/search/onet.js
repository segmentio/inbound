const querystring = require('querystring')

module.exports = (href, referrer) => {
  if (referrer.host && referrer.host.indexOf('szukaj.onet.pl') !== -1) {
    var description = { type: 'search', engine: 'onet' }
    var qs = querystring.parse(referrer.query)
    var query = qs.q || qs.qt
    if (query) description.query = query
    return description
  } else {
    return false
  }
}
