
var querystring = require('querystring');

module.exports = function (href, referrer, callback) {

  if (referrer.host && referrer.host.indexOf('buscador.terra') !== -1 ) {
    var description = { type: 'search', engine: 'terra' };
    var query = querystring.parse(referrer.query).query;
    if (query) description.query = query;
    return callback(null, description);
  } else {
    return callback(null, false);
  }

};
