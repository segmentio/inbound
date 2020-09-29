const querystring = require('querystring')

module.exports = (href, referrer) => {
  if (
    referrer.host &&
    referrer.host.indexOf('search.smt.docomo.ne.jp') !== -1
  ) {
    const description = { type: 'search', engine: 'search.smt.docomo' }
    const query = querystring.parse(referrer.query).MT
    if (query) description.query = query
    return description
  }
  return false
}
