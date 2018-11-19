
var querystring = require('querystring');

module.exports = function (href, referrer, callback) {

  if (referrer.host && referrer.host.indexOf('szukaj.onet.pl') !== -1 ) {
    var description = { type: 'search', engine: 'onet' };
    var qs = querystring.parse(referrer.query)
    var query = qs.q || qs.qt;
    if (query) description.query = query;
    return callback(null, description);
  } else {
    return callback(null, false);
  }

};
