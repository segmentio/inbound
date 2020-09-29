module.exports = (href, referrer) => {
  if (referrer.host && referrer.host.indexOf('linkedin.com') !== -1) {
    return {
      type: 'social',
      network: 'linkedin',
    }
  }
  return false
}
