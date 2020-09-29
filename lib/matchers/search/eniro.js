const querystring = require('querystring')

module.exports = (href, referrer) => {
  if (referrer.host && referrer.host.indexOf('eniro.se') !== -1) {
    const description = { type: 'search', engine: 'eniro' }
    const query = querystring.parse(referrer.query).search_word
    if (query) description.query = query
    return description
  }
  return false
}
