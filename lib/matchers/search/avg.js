const querystring = require('querystring')

module.exports = (href, referrer) => {
  if (referrer.host && referrer.host.indexOf('isearch.avg.com') !== -1) {
    var description = { type: 'search', engine: 'avg' }
    var query = querystring.parse(referrer.query).q
    if (query) description.query = query
    return description
  } else {
    return false
  }
}
