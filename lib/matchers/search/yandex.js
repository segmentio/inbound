
var querystring = require('querystring');

module.exports = function (href, referrer, callback) {

  if (referrer.host && referrer.host.indexOf('yandex') !== -1) {
    var description = { type: 'search', engine: 'yandex' };
    var qs = querystring.parse(referrer.query);
    var query = qs.text || qs.k;
    if (query) description.query = query;
    return callback(null, description);
  } else {
    return callback(null, false);
  }

};