const querystring = require('querystring')

module.exports = (href, referrer) => {
  if (referrer.host && referrer.host.indexOf('baidu.com') !== -1) {
    var description = { type: 'search', engine: 'baidu' }
    var qs = querystring.parse(referrer.query)
    var query = qs.wd || qs.word
    if (query) description.query = query
    return description
  } else {
    return false
  }
}
