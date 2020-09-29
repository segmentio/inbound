const querystring = require('querystring')

module.exports = (href, referrer) => {
  if (referrer.host && referrer.host.indexOf('rakuten.co.jp') !== -1) {
    const description = { type: 'search', engine: 'rakuten' }
    const query = querystring.parse(referrer.query).qt
    if (query) description.query = query
    return description
  }
  return false
}
