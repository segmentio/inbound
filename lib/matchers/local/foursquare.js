module.exports = (href, referrer) => {
  if (referrer.host && referrer.host.indexOf('foursquare.com') !== -1) {
    return { type: 'local', site: 'foursquare' }
  } else {
    return false
  }
}
