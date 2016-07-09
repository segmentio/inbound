

module.exports = function (href, referrer, callback) {

  if (referrer.host && referrer.host.indexOf('e.mail.ru') !== -1) {
    return callback(null, {
      type: 'email',
      client: 'mailru',
      from: referrer.href,
      link: href.href
    });
  } else {
    return callback(null, false);
  }

};
