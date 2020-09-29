module.exports = (href, referrer) => {
  if (referrer.host && referrer.host.indexOf('mapquest.com') !== -1) {
    return { type: 'local', site: 'mapquest' }
  } else {
    return false
  }
}
