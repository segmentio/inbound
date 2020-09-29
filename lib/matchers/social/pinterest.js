const _ = require('underscore')

module.exports = (href, referrer) => {
  let description = false

  if (referrer.host && referrer.host.indexOf('pinterest.com') !== -1) {
    description = {
      type: 'social',
      network: 'pinterest',
    }

    if (referrer.path) {
      const tokens = referrer.path.split('/')
      const index = _.indexOf(tokens, 'pin')
      if (index !== -1) {
        description.pin = tokens[index + 1]
      }
    }
  }

  return description
}
