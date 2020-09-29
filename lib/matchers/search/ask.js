const querystring = require('querystring')

module.exports = (href, referrer) => {
  if (
    referrer.host &&
    (referrer.host.indexOf('ask.com') !== -1 ||
      referrer.host.indexOf('search.aol.fr') !== -1)
  ) {
    var description = { type: 'search', engine: 'ask' }
    var query = querystring.parse(referrer.query).q
    if (query) description.query = query
    return description
  } else {
    return false
  }
}
