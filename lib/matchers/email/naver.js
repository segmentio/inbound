

module.exports = function (href, referrer, callback) {

  if (referrer.host && referrer.host.indexOf('mail.naver.com') !== -1) {
    return callback(null, {
      type: 'email',
      client: 'naver',
      from: referrer.href,
      link: href.href
    });
  } else {
    return callback(null, false);
  }

};