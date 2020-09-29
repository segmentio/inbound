const querystring = require('querystring')

module.exports = (href, referrer) => {
  if (
    referrer.host &&
    referrer.host.indexOf('bing.com') !== -1 &&
    href.href.indexOf('utm_medium=cpc') !== -1
  ) {
    const description = { type: 'ad', network: 'bing' }
    const query = querystring.parse(referrer.query).q
    if (query) description.query = query
    return description
  }
  return false
}
