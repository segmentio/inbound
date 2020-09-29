const querystring = require('querystring')

module.exports = (href, referrer) => {
  if (referrer.host && referrer.host.indexOf('ecosia.org') !== -1) {
    const description = { type: 'search', engine: 'ecosia' }
    const query = querystring.parse(referrer.query).q
    if (query) description.query = query
    return description
  }
  return false
}
