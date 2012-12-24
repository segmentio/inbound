
var _             = require('underscore'),
    should        = require('should'),

    shorten       = require('../lib/shorten'),
    domainCases   = require('./cases/shorterDomains'),
    domainUrls    = require('./cases/shorterUrls');

describe('Shorten utils', function () {

  it('should be able to shorten domains', function (done) {
    _.each(domainCases, function (expected, input) {
      var shortened = shorten.domain(input);
      shortened.should.equal(expected);
    });

    done();
  });

  it('should be able to shorten urls', function (done) {
    _.each(domainUrls, function (expected, input) {
      var shortened = shorten.url(input);
      should.equal(shortened, expected);
    });

    done();
  });

});