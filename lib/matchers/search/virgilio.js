
var querystring = require('querystring');

module.exports = function (href, referrer, callback) {

  if (referrer.host && referrer.host.indexOf('search.virgilio.it') !== -1 ) {
    var description = { type: 'search', engine: 'virgilio' };
    var query = querystring.parse(referrer.query).qs;
    if (query) description.query = query;
    return callback(null, description);
  } else {
    return callback(null, false);
  }

};
