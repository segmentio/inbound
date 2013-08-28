
/**
 * Fall through direct url matcher
 * @param  {[type]}   href     [description]
 * @param  {[type]}   referrer [description]
 * @param  {Function} callback [description]
 * @return {[type]}
 */
module.exports = function (href, referrer, callback) {

	if (!referrer.href || (referrer.protocol && referrer.protocol == 'about:')) return callback(null, {type: 'direct'});
  else return callback(null, false);
};