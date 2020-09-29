const querystring = require('querystring')

module.exports = (href, referrer) => {
  if (
    referrer.host &&
    referrer.host.indexOf('bing.com') !== -1 &&
    referrer.path &&
    referrer.path.indexOf('/local') === 0
  ) {
    const description = { type: 'local', site: 'bing' }
    const query = querystring.parse(referrer.query).q
    if (query) description.query = query
    return description
  }
  return false
}
