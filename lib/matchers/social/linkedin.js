

module.exports = function (href, referrer, callback) {

  if (referrer.host && referrer.host.indexOf('linkedin.com') !== -1) {
    return callback(null, {
      type: 'social',
      network: 'linkedin'
    });
  } else {
    return callback(null, false);
  }
};