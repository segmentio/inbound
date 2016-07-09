
module.exports = function (href, referrer, callback) {

  if (referrer.host &&
    (
      referrer.host.indexOf('ok.ru') !== -1 ||
      referrer.host.indexOf('odnoklassniki.ru') !== -1
    )
  ) {
    return callback(null, {
      type: 'social',
      network: 'odnoklassniki'
    });
  } else {
    return callback(null, false);
  }

};
