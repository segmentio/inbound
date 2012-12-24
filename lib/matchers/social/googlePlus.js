
module.exports = function (href, referrer, callback) {

  if (referrer.host &&
      referrer.host.indexOf('google.com') !== -1 &&
      referrer.host.indexOf('plus.') !== -1) {
    return callback(null, {
      type: 'social',
      network: 'google+'
    });
  } else {
    return callback(null, false);
  }
};