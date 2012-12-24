
var util          = require('util'),

    _             = require('underscore'),
    should        = require('should'),
    async         = require('async'),

    referrer      = require('../lib/referrer'),
    cases         = require('./cases/referrers');

describe('Inbound referrer', function () {

  it('should be able to parse urls and referrers properly', function (done) {
    async.forEach(cases, function (testCase, cb) {
      var shortened = referrer.parse(testCase.url, testCase.referrer, function (err, desc) {

        console.log('-- Test Case --');
        console.log('URL: ' + testCase.url);
        console.log('Referrer: ' + testCase.referrer);
        console.log('Expected: ' + util.inspect(testCase.result));
        console.log('Got: ' + util.inspect(desc));

        should.not.exist(err);
        should.exist(desc);
        var equal = _.isEqual(desc, testCase.result);
        if (!equal)
          desc.should.equal(testCase.result);
        cb(err);
      });
    }, done);
  });

});