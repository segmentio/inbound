module.exports = (href, referrer) => {
  if (
    referrer.host &&
    referrer.host.indexOf('google.com') !== -1 &&
    referrer.host.indexOf('source=hangouts') !== -1
  ) {
    return {
      type: 'social',
      network: 'google hangouts',
    }
  }
  return false
}
