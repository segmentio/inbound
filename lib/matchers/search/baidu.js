const querystring = require('querystring')

module.exports = (href, referrer) => {
  if (referrer.host && referrer.host.indexOf('baidu.com') !== -1) {
    const description = { type: 'search', engine: 'baidu' }
    const qs = querystring.parse(referrer.query)
    const query = qs.wd || qs.word
    if (query) description.query = query
    return description
  }
  return false
}
