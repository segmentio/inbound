module.exports = (href, referrer) => {
  if (referrer.host && referrer.host.indexOf('mail.naver.com') !== -1) {
    return {
      type: 'email',
      client: 'naver',
      from: referrer.href,
      link: href.href,
    }
  }
  return false
}
