module.exports = (href, referrer) => {
  if (referrer.host && referrer.host.indexOf('instagram.com') !== -1) {
    return {
      type: 'social',
      network: 'instagram',
    }
  }
  return false
}
