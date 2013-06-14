
module.exports = function (href, referrer, callback) {

  if (referrer.host && referrer.host.indexOf('me2day.net') !== -1) {
    return callback(null, {
      type: 'social',
      network: 'me2day'
    });
  } else {
    return callback(null, false);
  }

};