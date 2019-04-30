var querystring = require("querystring");

module.exports = function(href, referrer, callback) {
  var isGoogleAd;

  var isFromGoogle =
    referrer.host &&
    (referrer.host.indexOf("google") !== -1 ||
      referrer.host.indexOf("googleadservices.com") !== -1);

  // Referrer is Google and has gclid parameter
  if (isFromGoogle && href.path && href.path.indexOf("gclid=") !== -1) {
    isGoogleAd = true;
  } else if (isFromGoogle && referrer.path && referrer.path.indexOf("/aclk") !== -1) {
    isGoogleAd = true;
  }

  if (isGoogleAd) {
    var description = {
      type: "ad",
      network: "google",
    };

    var query = querystring.parse(referrer.query).q;
    var gclid =
      querystring.parse(referrer.query).gclid ||
      querystring.parse(href.query).gclid;

    if (query) description.query = query;
    else if (gclid) description.query = gclid;

    return callback(null, description);
  } else {
    return callback(null, false);
  }
};
