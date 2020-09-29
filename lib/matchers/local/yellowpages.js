module.exports = (href, referrer) => {
  if (referrer.host && referrer.host.indexOf('yellowpages.com') !== -1) {
    var description = { type: 'local', site: 'yellowpages' }
    var parts = referrer.pathname.split('/')
    if (parts[1]) description.location = parts[1].replace('-', ' ')
    if (parts[2] && parts[2] !== 'mip') description.query = parts[2]
    return description
  } else {
    return false
  }
}
