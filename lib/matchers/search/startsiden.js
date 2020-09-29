const querystring = require('querystring')

module.exports = (href, referrer) => {
  if (
    referrer.host &&
    referrer.href &&
    referrer.host.indexOf('startsiden.no') !== -1 &&
    referrer.href.indexOf('/sok?') !== -1
  ) {
    const description = { type: 'search', engine: 'startsiden' }
    const query = querystring.parse(referrer.query).q
    if (query) description.query = query
    return description
  }
  return false
}
