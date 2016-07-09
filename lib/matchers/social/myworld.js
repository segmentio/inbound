
module.exports = function (href, referrer, callback) {

  if (referrer.host && referrer.host.indexOf('my.mail.ru') !== -1) {
    return callback(null, {
      type: 'social',
      network: 'myworld'
    });
  } else {
    return callback(null, false);
  }

};
