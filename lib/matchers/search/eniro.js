
var querystring = require('querystring');

module.exports = function (href, referrer, callback) {

  if (referrer.host && referrer.host.indexOf('eniro.se') !== -1 ) {
    var description = { type: 'search', engine: 'eniro' };
    var query = querystring.parse(referrer.query).search_word;
    if (query) description.query = query;
    return callback(null, description);
  } else {
    return callback(null, false);
  }

};
