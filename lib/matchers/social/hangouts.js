
module.exports = function (href, referrer, callback) {

  if (referrer.host &&
    referrer.host.indexOf('google.com') !== -1 &&
    referrer.host.indexOf('source=hangouts') !== -1) {
    return callback(null, {
      type: 'social',
      network: 'google hangouts'
    });
  } else {
    return callback(null, false);
  }
};