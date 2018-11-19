
var querystring = require('querystring');

module.exports = function (href, referrer, callback) {

  if (referrer.host && referrer.href &&
      referrer.host.indexOf('globo') !== -1 && (
         referrer.href.indexOf('/busca/?') !== -1)) {

    var description = { type: 'search', engine: 'globo' };
    var query = querystring.parse(referrer.query).q;
    if (query) description.query = query;
    return callback(null, description);
  } else {
    return callback(null, false);
  }

};