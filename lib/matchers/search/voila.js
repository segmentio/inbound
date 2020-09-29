const querystring = require('querystring')

module.exports = (href, referrer) => {
  if (referrer.host && referrer.host.indexOf('voila.fr') !== -1) {
    var description = { type: 'search', engine: 'voila' }
    var query = querystring.parse(referrer.query).rdata
    if (query) description.query = query
    return description
  } else {
    return false
  }
}
