/* eslint-disable no-console */
const util = require('util')

const _ = require('underscore')
const should = require('should')
const async = require('async')

const referrer = require('../lib/referrer')
const cases = require('./cases/referrers')

describe('Inbound referrer', () => {
  it('should be able to parse urls and referrers properly', (done) => {
    async.forEach(
      cases,
      (testCase, cb) => {
        referrer.parse(testCase.url, testCase.referrer, (err, desc) => {
          console.log('-- Test Case --')
          console.log(`URL: ${testCase.url}`)
          console.log(`Referrer: ${testCase.referrer}`)
          console.log(`Expected: ${util.inspect(testCase.result)}`)
          console.log(`Got: ${util.inspect(desc)}`)

          should.not.exist(err)
          should.exist(desc)
          const equal = _.isEqual(desc, testCase.result)
          if (!equal) desc.should.equal(testCase.result)
          cb(err)
        })
      },
      done
    )
  })
})
