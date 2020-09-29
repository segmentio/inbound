module.exports = (href, referrer) => {
  if (href.host && referrer.host && href.host === referrer.host) {
    return {
      type: 'internal',
    }
  }
  return false
}
