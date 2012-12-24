

var url           = require('url'),
    querystring   = require('querystring'),
    _             = require('underscore'),
    async         = require('async'),
    matchers      = require('./matchers');

/**
 * Parses a location href and document referrer
 * into semantic information about how that visitor
 * got to the page.
 * @param  {string}   href     Location href, equivalent to window.location.href
 * @param  {string}   referrer Referrer url, equivalent to document.referrer
 * @param  {Function} callback callback(err, in);
  * where "in" is a object containing referrer and campaign information
  * about this inbound visitor.
 */
var parse = exports.parse = function parse(href, referrer, callback) {

  var parsedHref     = url.parse(href || '');
  var parsedReferrer = url.parse(referrer || '');

  async.parallel([

    async.apply(parseReferrer, parsedHref, parsedReferrer),
    async.apply(parseCampaign, parsedHref, parsedReferrer)

  ], function (err, results) {

    if (err)  {
      if (callback) return callback(err);

    } else {

      var ref = results[0];
      var campaign = results[1];

      var description = {};
      if (ref)      description.referrer      = ref;
      if (campaign) description.campaign = campaign;

      return callback(err, description);
    }

  });
};

var parseReferrer = function parseReferrer(href, referrer, callback) {

  var numOfMatchers  = _.size(matchers);

  var processMatcher = function (matcherIndex, done) {
    if (matcherIndex >= numOfMatchers) return done(null, null);
    else {
      var matcher = matchers[matcherIndex];
      process.nextTick(function () {
        matcher(href, referrer, function (err, description) {
          if (err) return done(err);
          else if (description) return done(null, description);
          else return processMatcher(matcherIndex + 1, done);
        });
      });
    }
  };

  if (numOfMatchers > 0) return processMatcher(0, callback);
  else callback(null, null);
};

var campaignKeyMap = {

  'utm_campaign' : 'campaign',
  'utm_source'   : 'source',
  'utm_term'     : 'term',
  'utm_medium'   : 'medium',
  'utm_count'    : 'content'

};

var parseCampaign = function parseCampaign (href, referrer, callback) {
  var query = querystring.parse(href.query);
  var campaign = {};
  _.each(campaignKeyMap, function (ourKey, queryKey) {
    if (queryKey in query) campaign[ourKey] = query[queryKey];
  });
  return callback(null, _.size(campaign) > 0 ? campaign: null);
};