
var querystring = require('querystring');

module.exports = function (href, referrer, callback) {

  if (referrer.host && 
      (referrer.host.indexOf('local.yahoo') !== -1 || 
       referrer.host.indexOf('local.search.yahoo') !== -1)) {
    var description = { type: 'local', site: 'yahoo' };
    var qs = querystring.parse(referrer.query);
    if (qs.p) description.query = qs.p;
    if (qs.addr) description.location = qs.addr;
    return callback(null, description);
  } else {
    return callback(null, false);
  }

};