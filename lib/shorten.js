const url = require('url')
const _ = require('underscore')

/**
 * Non-semantic subdomain tokens to remove
 * @type {Array}
 */
const removableDomains = ['m.', 'www.']

/**
 * Domain transformation map (for international domains)
 * @type {Object}
 */
const domainTransformationMap = {
  amazon: 'amazon.com',
  bing: 'bing.com',
  google: 'google.com',
}

const domainTransformations = _.keys(domainTransformationMap)

/**
 * Shortens domains by removing non-semantic subdomains (www, m) and
 * transforms common international domains (google.co.uk => google.com)
 * @param  {string} domain Domain
 * @return {string}        Shortened domain
 */
function shortenDomain(origDomain) {
  if (!origDomain) return ''

  let domain = origDomain

  _.each(removableDomains, (removable) => {
    if (domain.indexOf(removable) === 0) domain = domain.replace(removable, '')
  })

  // turn google.co.uk into google.com but leave news.google.co.uk to news.google.com
  const tokens = domain.split('.')
  for (let i = 0; i < tokens.length; i += 1) {
    const token = tokens[i]
    if (_.contains(domainTransformations, token)) {
      // we just matched "google" in the news.google.co.uk
      domain = domainTransformationMap[token]
      // add all the backward tokens
      // like the news. in the news.google.co.uk
      for (let j = i - 1; j >= 0; j -= 1) {
        domain = `${tokens[j]}.${domain}`
      }

      break
    }
  }

  return domain
}

function shortenUrl(u) {
  if (!u) return ''

  const parsed = url.parse(u)

  // if we don't have a domain, then just return it
  if (!parsed.host) return ''

  return (
    shortenDomain(parsed.host) +
    trim(parsed.pathname) +
    getShortHash(parsed.pathname, parsed.hash)
  )
}

/**
 * Gets a short hash tag if there is no query string and the hash tag is short.
 * @param  {string} pathname Url pathname
 * @param  {string} hash     Url hash
 * @return {string}          Short hash if one is available, otherwise empty string
 */
function getShortHash(pathname, hash) {
  let result = ''
  if (!hash) return result

  if (
    (_.isEmpty(pathname) || pathname.length < 2) &&
    hash.length > 0 &&
    hash.length < 20
  ) {
    result = `/${trim(hash)}`
  }

  return result
}

/**
 * Returns whether the string starts with the comparison string
 * @param  {string} str    Original string
 * @param  {string} suffic Comparison string
 * @return {boolean}    Whether the original string starts with the comparison string
 */
function endsWith(str, suffix) {
  return str.indexOf(suffix, str.length - suffix.length) !== -1
}

/**
 * Trims all ending slashes and question marks from the end of the url
 * @param  {string} str String to trim
 * @return {string}     Trimmed string
 */
function trim(text) {
  let str = text
  while (endsWith(str, '/') || endsWith(str, '?')) {
    str = str.substring(0, str.length - 1)
  }
  return str
}

module.exports = {
  domain: shortenDomain,
  url: shortenUrl,
}
