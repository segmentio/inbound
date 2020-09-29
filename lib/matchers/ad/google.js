const querystring = require('querystring')

module.exports = (href, referrer) => {
  let isGoogleAd

  const isFromGoogle =
    referrer.host &&
    (referrer.host.indexOf('google') !== -1 ||
      referrer.host.indexOf('googleadservices.com') !== -1)

  // Referrer is Google and has gclid parameter
  if (href.path && href.path.indexOf('gclid=') !== -1) {
    isGoogleAd = true
  } else if (referrer.path && referrer.path.indexOf('/aclk') !== -1) {
    isGoogleAd = true
  }

  const network = referrer.host && !isFromGoogle ? referrer.host : 'google'

  if (isGoogleAd) {
    const description = {
      type: 'ad',
      network,
    }

    const query = querystring.parse(referrer.query).q
    const gclid =
      querystring.parse(referrer.query).gclid ||
      querystring.parse(href.query).gclid

    if (query) description.query = query
    else if (gclid) description.query = gclid

    return description
  }
  return false
}
