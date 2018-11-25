
module.exports = function (href, referrer, callback) {

  if (referrer.host && referrer.host.indexOf('instagram.com') !== -1) {
    return callback(null, {
      type: 'social',
      network: 'instagram'
    });
  } else {
    return callback(null, false);
  }

};