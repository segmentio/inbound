module.exports = (href, referrer) => {
  if (referrer.host && referrer.host.indexOf('groupon.com') !== -1) {
    return { type: 'local', site: 'groupon' }
  }
  return false
}
