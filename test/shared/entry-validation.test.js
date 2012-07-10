var expect = require('expect.js')
  , entryValidation = require('../../shared/js/entry_validation');

describe('EntryValidation', function() {
  describe('#validate()', function() {
    it('returns something when no name value is provided', function() {
      var result = entryValidation.validate({ "test": "test" });
      expect(result).to.be.ok();
    });

    it('returns nothing when a name value is provided', function() {
      var result = entryValidation.validate({ "name": "test" });
      expect(result).to.not.be.ok();
    });
  });
});