
var querystring = require('querystring');

module.exports = function (href, referrer, callback) {

  if (referrer.host && referrer.host.indexOf('yam.com') !== -1 ) {
    var description = { type: 'search', engine: 'yam' };
    var query = querystring.parse(referrer.query).k;
    if (query) description.query = query;
    return callback(null, description);
  } else {
    return callback(null, false);
  }

};
