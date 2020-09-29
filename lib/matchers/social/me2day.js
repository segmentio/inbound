module.exports = (href, referrer) => {
  if (referrer.host && referrer.host.indexOf('me2day.net') !== -1) {
    return {
      type: 'social',
      network: 'me2day',
    }
  }
  return false
}
