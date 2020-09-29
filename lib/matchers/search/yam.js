const querystring = require('querystring')

module.exports = (href, referrer) => {
  if (referrer.host && referrer.host.indexOf('yam.com') !== -1) {
    var description = { type: 'search', engine: 'yam' }
    var query = querystring.parse(referrer.query).k
    if (query) description.query = query
    return description
  } else {
    return false
  }
}
