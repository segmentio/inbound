const querystring = require('querystring')

module.exports = (href, referrer) => {
  if (
    referrer.host &&
    referrer.href &&
    referrer.host.indexOf('startsiden.no') !== -1 &&
    referrer.href.indexOf('/sok?') !== -1
  ) {
    var description = { type: 'search', engine: 'startsiden' }
    var query = querystring.parse(referrer.query).q
    if (query) description.query = query
    return description
  } else {
    return false
  }
}
