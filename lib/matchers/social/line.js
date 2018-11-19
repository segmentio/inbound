
module.exports = function (href, referrer, callback) {
  if (/\WLine\/\d/.test(navigator.userAgent)) {
    return callback(null, {
      type: 'social',
      network: 'line'
    });
  } else {
    return callback(null, false);
  }
};