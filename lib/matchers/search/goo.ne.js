const querystring = require('querystring')

module.exports = (href, referrer) => {
  if (referrer.host && referrer.host.indexOf('goo.ne.jp') !== -1) {
    const description = { type: 'search', engine: 'goo.ne' }
    const query = querystring.parse(referrer.query).MT
    if (query) description.query = query
    return description
  }
  return false
}
