const querystring = require('querystring')

module.exports = (href, referrer) => {
  if (
    referrer.host &&
    referrer.href &&
    referrer.host.indexOf('google') !== -1 &&
    (referrer.href.indexOf('/url?') !== -1 ||
      referrer.href.indexOf('/url/?') !== -1 ||
      referrer.href.indexOf('/search?') !== -1 ||
      referrer.href.indexOf('/search/?') !== -1)
  ) {
    const description = { type: 'search', engine: 'google' }
    const query = querystring.parse(referrer.query).q
    if (query) description.query = query
    return description
  }
  return false
}
