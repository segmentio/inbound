module.exports = (href, referrer) => {
  if (referrer.host && referrer.host.indexOf('facebook.com') !== -1) {
    return {
      type: 'social',
      network: 'facebook',
    }
  } else {
    return false
  }
}
