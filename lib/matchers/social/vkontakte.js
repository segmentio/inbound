
module.exports = function (href, referrer, callback) {

  if (
        referrer.host &&
        (
            referrer.host.indexOf('vk.com') !== -1 ||
            referrer.host.indexOf('vkontakte.ru') !== -1 ||
            referrer.host === 'vk.cc' ||
            (
                referrer.host === 'vk.com' &&
                referrer.path.indexOf('/away.php')
            )
        )
    ) {
    return callback(null, {
      type: 'social',
      network: 'vkontakte'
    });
  } else {
    return callback(null, false);
  }

};
