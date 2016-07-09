var querystring = require('querystring');

module.exports = function (href, referrer, callback) {

  if (referrer.host &&
      referrer.href &&
      referrer.host.indexOf('mail.yandex.') === -1 &&
      referrer.host.indexOf('yandex.') !== -1 &&
      (
         referrer.href.indexOf('/clck') !== -1 ||
         referrer.href.indexOf('/search') !== -1
      )
  ) {

    var description = { type: 'search', engine: 'yandex' };
    return callback(null, description);
  } else {
    return callback(null, false);
  }

};
