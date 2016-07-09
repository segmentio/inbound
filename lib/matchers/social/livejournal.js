
module.exports = function (href, referrer, callback) {

  if (referrer.host && referrer.host.indexOf('livejournal') !== -1) {
    return callback(null, {
      type: 'social',
      network: 'livejournal'
    });
  } else {
    return callback(null, false);
  }

};
