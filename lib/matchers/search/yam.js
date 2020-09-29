const querystring = require('querystring')

module.exports = (href, referrer) => {
  if (referrer.host && referrer.host.indexOf('yam.com') !== -1) {
    const description = { type: 'search', engine: 'yam' }
    const query = querystring.parse(referrer.query).k
    if (query) description.query = query
    return description
  }
  return false
}
