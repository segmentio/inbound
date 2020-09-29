const querystring = require('querystring')

module.exports = (href, referrer) => {
  if (referrer.host && referrer.host.indexOf('yandex') !== -1) {
    const description = { type: 'search', engine: 'yandex' }
    const qs = querystring.parse(referrer.query)
    const query = qs.text || qs.k
    if (query) description.query = query
    return description
  }
  return false
}
