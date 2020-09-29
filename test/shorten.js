const _ = require('underscore')
const should = require('should')

const shorten = require('../lib/shorten')
const domainCases = require('./cases/shorterDomains')
const domainUrls = require('./cases/shorterUrls')

describe('Shorten utils', () => {
  it('should be able to shorten domains', (done) => {
    _.each(domainCases, (expected, input) => {
      const shortened = shorten.domain(input)
      shortened.should.equal(expected)
    })

    done()
  })

  it('should be able to shorten urls', (done) => {
    _.each(domainUrls, (expected, input) => {
      const shortened = shorten.url(input)
      should.equal(shortened, expected)
    })

    done()
  })
})
