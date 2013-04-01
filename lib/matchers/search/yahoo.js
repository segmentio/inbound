
var querystring = require('querystring');
var tldextract = require('tldextract');

module.exports = function (href, referrer, callback) {

  if (referrer.host && referrer.host.indexOf('search.yahoo') === -1) {
    return callback(null, false);
  }
  
  tldextract(referrer.href, function(e, tld) {
    if (!e && tld.domain === "yahoo" && tld.subdomain.indexOf("search") !== -1) {
      var description = { type: 'search', engine: 'yahoo' };
      var query = querystring.parse(referrer.query).p;
      if (query) description.query = query;
      return callback(null, description);
    } else {
      return callback(null, false);
    }
  });

};