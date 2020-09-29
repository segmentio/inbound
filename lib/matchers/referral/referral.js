module.exports = (href, referrer) => {
  // if the link has a valid host and link then its a link
  if (
    referrer.host &&
    referrer.href &&
    (!referrer.protocol || referrer.protocol !== 'about:')
  ) {
    return {
      type: 'referral',
      from: referrer.href,
      link: href.href,
      host: referrer.host,
    }
  }
  return false
}
