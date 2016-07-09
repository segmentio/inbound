

module.exports = function (href, referrer, callback) {

  if (referrer.host && referrer.host.indexOf('mail.yandex.') !== -1) {
    return callback(null, {
      type: 'email',
      client: 'yandex',
      from: referrer.href,
      link: href.href
    });
  } else {
    return callback(null, false);
  }

};
