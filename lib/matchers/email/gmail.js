module.exports = (href, referrer) => {
  if (referrer.host && referrer.host.indexOf('mail.google.com') !== -1) {
    return {
      type: 'email',
      client: 'gmail',
      from: referrer.href,
      link: href.href,
    }
  }
  return false
}
