module.exports = (href, referrer) => {
  if (
    referrer.host &&
    referrer.host.indexOf('google.com') !== -1 &&
    referrer.host.indexOf('plus.') !== -1
  ) {
    return {
      type: 'social',
      network: 'google+',
    }
  }
  return false
}
