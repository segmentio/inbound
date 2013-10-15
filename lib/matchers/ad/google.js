var querystring = require("querystring");

module.exports = function (href, referrer, callback) {

  if (referrer.host &&
      referrer.path &&
      referrer.path.indexOf("/aclk") !== -1 &&
      (referrer.host.indexOf('google') !== -1 ||
       referrer.host.indexOf('googleadservices.com') !== -1)) {
         
    var description = {
      type: 'ad',
      network: 'google'
    };
    var query = querystring.parse(referrer.query).q;
    if (query) description.query = query;
         
    return callback(null, description);
  } else {
    return callback(null, false);
  }

};
