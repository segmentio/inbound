module.exports = (href, referrer) => {
  if (
    referrer.host &&
    (referrer.host.indexOf('twitter.com') !== -1 || referrer.host === 't.co')
  ) {
    return {
      type: 'social',
      network: 'twitter',
    }
  } else {
    return false
  }
}
