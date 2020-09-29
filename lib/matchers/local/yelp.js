module.exports = (href, referrer) => {
  if (referrer.host && referrer.host.indexOf('yelp.com') !== -1) {
    return { type: 'local', site: 'yelp' }
  }
  return false
}
