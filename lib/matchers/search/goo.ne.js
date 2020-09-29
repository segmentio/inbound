const querystring = require('querystring')

module.exports = (href, referrer) => {
  if (referrer.host && referrer.host.indexOf('goo.ne.jp') !== -1) {
    var description = { type: 'search', engine: 'goo.ne' }
    var query = querystring.parse(referrer.query).MT
    if (query) description.query = query
    return description
  } else {
    return false
  }
}
