
var querystring = require('querystring');

module.exports = function (href, referrer, callback) {

  if (referrer.host && referrer.host.indexOf('voila.fr') !== -1 ) {
    var description = { type: 'search', engine: 'voila' };
    var query = querystring.parse(referrer.query).rdata;
    if (query) description.query = query;
    return callback(null, description);
  } else {
    return callback(null, false);
  }

};
