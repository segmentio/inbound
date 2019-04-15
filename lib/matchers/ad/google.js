var querystring = require("querystring");

module.exports = function(href, referrer, callback) {
  if (
    referrer.host &&
    referrer.path &&
    (referrer.path.indexOf("/aclk") !== -1 ||
      referrer.path.indexOf("gclid=") !== -1) &&
    (referrer.host.indexOf("google") !== -1 ||
      referrer.host.indexOf("googleadservices.com") !== -1)
  ) {
    var description = {
      type: "ad",
      network: "google",
    };
    var query = querystring.parse(referrer.query).q;
    var gclid = querystring.parse(referrer.query).gclid;
    if (query) description.query = query;
    else if (gclid) description.query = gclid;

    return callback(null, description);
  } else {
    return callback(null, false);
  }
};
