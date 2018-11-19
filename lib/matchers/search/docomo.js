
var querystring = require('querystring');

module.exports = function (href, referrer, callback) {

  if (referrer.host && referrer.host.indexOf('search.smt.docomo.ne.jp') !== -1 ) {
    var description = { type: 'search', engine: 'search.smt.docomo' };
    var query = querystring.parse(referrer.query).MT;
    if (query) description.query = query;
    return callback(null, description);
  } else {
    return callback(null, false);
  }

};
