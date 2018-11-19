
var querystring = require('querystring');

module.exports = function (href, referrer, callback) {

  if (referrer.host && referrer.host.indexOf('rakuten.co.jp') !== -1 ) {
    var description = { type: 'search', engine: 'rakuten' };
    var query = querystring.parse(referrer.query).qt;
    if (query) description.query = query;
    return callback(null, description);
  } else {
    return callback(null, false);
  }

};
