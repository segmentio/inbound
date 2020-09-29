const querystring = require('querystring')

module.exports = (href, referrer) => {
  if (referrer.host && referrer.host.indexOf('buscador.terra') !== -1) {
    var description = { type: 'search', engine: 'terra' }
    var query = querystring.parse(referrer.query).query
    if (query) description.query = query
    return description
  } else {
    return false
  }
}
