
module.exports = function (href, referrer, callback) {

  if (referrer.host && referrer.host.indexOf('tumblr.com') !== -1) {
    return callback(null, {
      type: 'social',
      network: 'tumblr'
    });
  } else {
    return callback(null, false);
  }

};