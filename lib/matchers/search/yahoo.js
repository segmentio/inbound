
var querystring = require('querystring');

module.exports = function (href, referrer, callback) {

  if (referrer.host && referrer.host.indexOf('search.yahoo.com') !== -1) {
    var description = { type: 'search', engine: 'yahoo' };
    var query = querystring.parse(referrer.query).p;
    if (query) description.query = query;
    return callback(null, description);
  } else {
    return callback(null, false);
  }

};