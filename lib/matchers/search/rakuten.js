const querystring = require('querystring')

module.exports = (href, referrer) => {
  if (referrer.host && referrer.host.indexOf('rakuten.co.jp') !== -1) {
    var description = { type: 'search', engine: 'rakuten' }
    var query = querystring.parse(referrer.query).qt
    if (query) description.query = query
    return description
  } else {
    return false
  }
}
