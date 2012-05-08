define([
    '../../../client/js/models/entry'
  ], function(
    Entry
  ) {
  
  describe('Entry', function() {
    it('should check for required fields', function() {
      var entry = new Entry();
      expect(entry.validate({})).to.be.a('string');
    });
  });

});
