
var querystring = require('querystring');

module.exports = function (href, referrer, callback) {

  if (referrer.host && referrer.host.indexOf('wp.pl') !== -1 ) {
    var description = { type: 'search', engine: 'wirtulana polska' };
    var query = querystring.parse(referrer.query).szukaj;
    if (query) description.query = query;
    return callback(null, description);
  } else {
    return callback(null, false);
  }

};
