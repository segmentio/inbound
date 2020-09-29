const querystring = require('querystring')

module.exports = (href, referrer) => {
  if (
    !referrer ||
    !referrer.href ||
    (referrer.host && referrer.host.indexOf('search.yahoo') === -1)
  ) {
    return false
  }

  const description = { type: 'search', engine: 'yahoo' }
  const query = querystring.parse(referrer.query).p
  if (query) description.query = query
  return description
}
