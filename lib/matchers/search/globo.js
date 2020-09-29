const querystring = require('querystring')

module.exports = (href, referrer) => {
  if (
    referrer.host &&
    referrer.href &&
    referrer.host.indexOf('globo') !== -1 &&
    referrer.href.indexOf('/busca/?') !== -1
  ) {
    const description = { type: 'search', engine: 'globo' }
    const query = querystring.parse(referrer.query).q
    if (query) description.query = query
    return description
  }
  return false
}
