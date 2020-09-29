const querystring = require('querystring')

module.exports = (href, referrer) => {
  if (
    referrer.host &&
    referrer.host.indexOf('search.yahoo.com') !== -1 &&
    href.href.indexOf('utm_medium=cpc') !== -1
  ) {
    const description = { type: 'ad', network: 'yahoo' }
    const query = querystring.parse(referrer.query).p
    if (query) description.query = query
    return description
  }
  return false
}
