const url = require('url')
const querystring = require('querystring')
const _ = require('underscore')
const matchers = require('./matchers')

/**
 * Parses a location href and document referrer
 * into semantic information about how that visitor
 * got to the page.
 * @param  {string}   href     Location href, equivalent to window.location.href
 * @param  {string}   referrer Referrer url, equivalent to document.referrer
 * where "in" is a object containing referrer and campaign information
 * about this inbound visitor.
 */
function parse(href, referrer) {
  const parsedHref = url.parse(href || '')
  const parsedReferrer = url.parse(referrer || '')

  const ref = parseReferrer(parsedHref, parsedReferrer)
  const campaign = parseCampaign(parsedHref, parsedReferrer)

  const description = {}
  if (ref) description.referrer = ref
  if (campaign) description.campaign = campaign

  return description
}

function parseReferrer(href, referrer) {
  const numOfMatchers = _.size(matchers)

  const processMatcher = function (matcherIndex) {
    if (matcherIndex >= numOfMatchers) return null
    else {
      const matcher = matchers[matcherIndex]
      const description = matcher(href, referrer)
      if (description) return description
      else return processMatcher(matcherIndex + 1)
    }
  }

  if (numOfMatchers > 0) return processMatcher(0)
  else return null
}

const campaignKeyMap = {
  utm_campaign: 'campaign',
  utm_source: 'source',
  utm_term: 'term',
  utm_medium: 'medium',
  utm_count: 'content',
}

function parseCampaign(href, referrer) {
  const query = querystring.parse(href.query)
  const campaign = {}
  _.each(campaignKeyMap, function (ourKey, queryKey) {
    if (queryKey in query) campaign[ourKey] = query[queryKey]
  })
  return _.size(campaign) > 0 ? campaign : null
}

module.exports = {
  parse,
  parseReferrer,
  parseCampaign,
}
