const querystring = require('querystring')

module.exports = (href, referrer) => {
  if (referrer.host && referrer.host.indexOf('rambler.ru') !== -1) {
    const description = { type: 'search', engine: 'rambler' }
    const { query } = querystring.parse(referrer.query)
    if (query) description.query = query
    return description
  }
  return false
}
