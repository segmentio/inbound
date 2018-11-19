
var querystring = require('querystring');

module.exports = function (href, referrer, callback) {

  if (referrer.host && referrer.host.indexOf('search.tut.by') !== -1 ) {
    var description = { type: 'search', engine: 'tut.by' };
    var query = querystring.parse(referrer.query).query;
    if (query) description.query = query;
    return callback(null, description);
  } else {
    return callback(null, false);
  }

};
