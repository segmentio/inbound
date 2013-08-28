
var querystring = require('querystring');

module.exports = function (href, referrer, callback) {

  if (referrer.host && 
      referrer.host.indexOf('bing.com') !== -1 &&
      referrer.path &&
      referrer.path.indexOf("/local") === 0) {
    var description = { type: 'local', site: 'bing' };
    var query = querystring.parse(referrer.query).q;
    if (query) description.query = query;
    return callback(null, description);
  } else {
    return callback(null, false);
  }

};