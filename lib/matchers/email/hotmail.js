

module.exports = function (href, referrer, callback) {

  if (referrer.host && referrer.host.indexOf('mail.live.com') !== -1) {
    return callback(null, {
      type: 'email',
      client: 'hotmail',
      from: referrer.href,
      link: href.href
    });
  } else {
    return callback(null, false);
  }

};