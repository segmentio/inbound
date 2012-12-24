

module.exports = function (href, referrer, callback) {

  if (referrer.host && referrer.host.indexOf('mail.yahoo.net') !== -1) {
    return callback(null, {
      type: 'email',
      client: 'yahoo',
      from: referrer.href,
      link: href.href
    });
  } else {
    return callback(null, false);
  }

};