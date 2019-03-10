var Browser = require('zombie')
var assert = require('assert')
var app = require('../nebula')

describe('main page', function() { 
    before(function() {
      this.browser = new Browser({ site: 'http://localhost:3000' })
    })
    before(function(done) {
      this.browser.visit('/', done)
    })
    it('should say nebula', function() { 
      assert.ok(this.browser.success)
      assert.equal(this.browser.text(), "nebula")
    })
  })

