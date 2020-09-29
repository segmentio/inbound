module.exports = (href, referrer) => {
  if (referrer.host && referrer.host.indexOf('tumblr.com') !== -1) {
    return {
      type: 'social',
      network: 'tumblr',
    }
  } else {
    return false
  }
}
