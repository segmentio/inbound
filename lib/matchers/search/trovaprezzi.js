const querystring = require('querystring')

module.exports = (href, referrer) => {
  if (referrer.host && referrer.host.indexOf('trovaprezzi.it') !== -1) {
    const description = { type: 'search', engine: 'trovaprezzi' }
    const { query } = querystring.parse(referrer.query)
    if (query) description.query = query
    return description
  }
  return false
}
