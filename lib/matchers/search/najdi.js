const querystring = require('querystring')

module.exports = (href, referrer) => {
  if (referrer.host && referrer.host.indexOf('najdi.si') !== -1) {
    const description = { type: 'search', engine: 'najdi' }
    const query = querystring.parse(referrer.query).q
    if (query) description.query = query
    return description
  }
  return false
}
