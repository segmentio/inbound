const querystring = require('querystring')

module.exports = (href, referrer) => {
  if (
    referrer.host &&
    referrer.host.indexOf('search.smt.docomo.ne.jp') !== -1
  ) {
    var description = { type: 'search', engine: 'search.smt.docomo' }
    var query = querystring.parse(referrer.query).MT
    if (query) description.query = query
    return description
  } else {
    return false
  }
}
