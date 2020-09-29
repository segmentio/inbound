const querystring = require('querystring')

module.exports = (href, referrer) => {
  if (referrer.host && referrer.host.indexOf('rambler.ru') !== -1) {
    var description = { type: 'search', engine: 'rambler' }
    var query = querystring.parse(referrer.query).query
    if (query) description.query = query
    return description
  } else {
    return false
  }
}
