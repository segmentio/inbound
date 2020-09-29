module.exports = (href, referrer) => {
  if (referrer.host && referrer.host.indexOf('reddit.com') !== -1) {
    return {
      type: 'social',
      network: 'reddit',
    }
  } else {
    return false
  }
}
