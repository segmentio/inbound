const querystring = require('querystring')

module.exports = (href, referrer) => {
  if (referrer.host && referrer.host.indexOf('yandex') !== -1) {
    var description = { type: 'search', engine: 'yandex' }
    var qs = querystring.parse(referrer.query)
    var query = qs.text || qs.k
    if (query) description.query = query
    return description
  } else {
    return false
  }
}
