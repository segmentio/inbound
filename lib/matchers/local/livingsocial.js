module.exports = (href, referrer) => {
  if (referrer.host && referrer.host.indexOf('livingsocial.com') !== -1) {
    const description = { type: 'local', site: 'livingsocial' }
    const parts = referrer.pathname.split('/')
    if (parts[1] === 'cities' && parts[2])
      description.location = parts[2].split('-').slice(1).join(' ')
    return description
  }
  return false
}
