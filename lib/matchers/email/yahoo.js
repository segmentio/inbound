module.exports = (href, referrer) => {
  if (referrer.host && referrer.host.indexOf('mail.yahoo') !== -1) {
    return {
      type: 'email',
      client: 'yahoo',
      from: referrer.href,
      link: href.href,
    }
  }

  return false
}
