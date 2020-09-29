const querystring = require('querystring')

module.exports = (href, referrer) => {
  if (
    referrer.host &&
    referrer.href &&
    referrer.host.indexOf('cnn.com') !== -1 &&
    referrer.href.indexOf('/search/?') !== -1
  ) {
    const description = { type: 'search', engine: 'cnn' }
    const { query } = querystring.parse(referrer.query)
    if (query) description.query = query
    return description
  }
  return false
}
