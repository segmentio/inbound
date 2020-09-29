module.exports = (href, referrer) => {
  if (referrer.host && referrer.host.indexOf('opentable.com') !== -1) {
    return { type: 'local', site: 'opentable' }
  }
  return null
}
