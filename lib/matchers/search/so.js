const querystring = require('querystring')

module.exports = (href, referrer) => {
  if (
    referrer.host &&
    referrer.href &&
    referrer.host.indexOf('so.com') !== -1 &&
    referrer.href.indexOf('/s?') !== -1
  ) {
    var description = { type: 'search', engine: 'so.com' }
    var query = querystring.parse(referrer.query).q
    if (query) description.query = query
    return description
  } else {
    return false
  }
}
