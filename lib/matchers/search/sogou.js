
var querystring = require('querystring');

module.exports = function (href, referrer, callback) {

  if (referrer.host && referrer.host.indexOf('sogou.com') !== -1 ) {
    var description = { type: 'search', engine: 'sogou' };
    var query = querystring.parse(referrer.query).query;
    if (query) description.query = query;
    return callback(null, description);
  } else {
    return callback(null, false);
  }

};
