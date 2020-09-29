const querystring = require('querystring')

module.exports = (href, referrer) => {
  if (
    referrer.host &&
    (referrer.host.indexOf('alice.com') !== -1 ||
      referrer.host.indexOf('aliceadsl.fr') !== -1)
  ) {
    var description = { type: 'search', engine: 'alice' }
    var query = querystring.parse(referrer.query).qs
    if (query) description.query = query
    return description
  } else {
    return false
  }
}
