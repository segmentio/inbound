
var querystring = require('querystring');

module.exports = function (href, referrer, callback) {

  if (referrer.host && referrer.host.indexOf('baidu.com') !== -1) {
    var description = { type: 'search', engine: 'baidu' };
    var qs = querystring.parse(referrer.query);
    var query = qs.wd || qs.word;
    if (query) description.query = query;
    return callback(null, description);
  } else {
    return callback(null, false);
  }

};