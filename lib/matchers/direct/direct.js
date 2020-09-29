/**
 * Fall through direct url matcher
 * @param  {[type]}   href     [description]
 * @param  {[type]}   referrer [description]
 * @return {[type]}
 */
module.exports = (href, referrer) => {
  if (!referrer.href || (referrer.protocol && referrer.protocol === 'about:'))
    return { type: 'direct' }
  return false
}
