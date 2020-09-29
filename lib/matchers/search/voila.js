const querystring = require('querystring')

module.exports = (href, referrer) => {
  if (referrer.host && referrer.host.indexOf('voila.fr') !== -1) {
    const description = { type: 'search', engine: 'voila' }
    const query = querystring.parse(referrer.query).rdata
    if (query) description.query = query
    return description
  }
  return false
}
