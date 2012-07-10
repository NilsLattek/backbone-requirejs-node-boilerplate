// always import requirejs through requirejs_testing
var requirejs = require('../requirejs_testing'),
    expect = require('expect.js');

requirejs(['models/entry'], function(Entry) {

  describe('Entry', function() {
    it('should check for required fields', function() {
      var entry = new Entry();
      expect(entry.validate({})).to.be.a('string');
    });
  });

});
