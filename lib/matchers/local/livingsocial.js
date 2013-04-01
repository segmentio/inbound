
module.exports = function (href, referrer, callback) {

  if (referrer.host && referrer.host.indexOf('livingsocial.com') !== -1) {
    var description = { type: 'local', site: 'livingsocial' };
    var parts = referrer.pathname.split("/");
    if(parts[1] === "cities" && parts[2])
      description.location = parts[2].split("-").slice(1).join(" ");
    return callback(null, description);
  } else {
    return callback(null, false);
  }

};