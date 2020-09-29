const querystring = require('querystring')

module.exports = (href, referrer) => {
  if (referrer.host && referrer.host.indexOf('wp.pl') !== -1) {
    var description = { type: 'search', engine: 'wirtulana polska' }
    var query = querystring.parse(referrer.query).szukaj
    if (query) description.query = query
    return description
  } else {
    return false
  }
}
