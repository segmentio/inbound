const querystring = require('querystring')

module.exports = (href, referrer) => {
  if (
    referrer.host &&
    (referrer.host.indexOf('local.yahoo') !== -1 ||
      referrer.host.indexOf('local.search.yahoo') !== -1)
  ) {
    const description = { type: 'local', site: 'yahoo' }
    const qs = querystring.parse(referrer.query)
    if (qs.p) description.query = qs.p
    if (qs.addr) description.location = qs.addr
    return description
  }
  return false
}
