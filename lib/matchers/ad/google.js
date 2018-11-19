var querystring = require('querystring');

module.exports = function (href, referrer, callback) {

  if (referrer.host && referrer.href && referrer.path &&
    (referrer.host.indexOf('google') !== -1 || referrer.host.indexOf('googleadservices.com') !== -1)
    && (referrer.href.indexOf('?gclid') !== -1 || referrer.path.indexOf("/aclk") !== -1)) {

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
