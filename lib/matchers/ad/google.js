const querystring = require('querystring')

module.exports = (href, referrer) => {
  var isGoogleAd

  var isFromGoogle =
    referrer.host &&
    (referrer.host.indexOf('google') !== -1 ||
      referrer.host.indexOf('googleadservices.com') !== -1)

  // Referrer is Google and has gclid parameter
  if (href.path && href.path.indexOf('gclid=') !== -1) {
    isGoogleAd = true
  } else if (referrer.path && referrer.path.indexOf('/aclk') !== -1) {
    isGoogleAd = true
  }

  var network = referrer.host && !isFromGoogle ? referrer.host : 'google'

  if (isGoogleAd) {
    var description = {
      type: 'ad',
      network,
    }

    var query = querystring.parse(referrer.query).q
    var gclid =
      querystring.parse(referrer.query).gclid ||
      querystring.parse(href.query).gclid

    if (query) description.query = query
    else if (gclid) description.query = gclid

    return description
  } else {
    return false
  }
}
