
var querystring = require('querystring');

module.exports = function (href, referrer, callback) {

  if (referrer.host && (referrer.host.indexOf('altavista.com') !== -1 ||
    referrer.host.indexOf('aliceadsl.fr') !== -1)) {
    var description = { type: 'search', engine: 'altavista' };
    var query = querystring.parse(referrer.query).q;
    if (query) description.query = query;
    return callback(null, description);
  } else {
    return callback(null, false);
  }

};
