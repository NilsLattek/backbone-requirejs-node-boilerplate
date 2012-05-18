var entriesController = require('../../../server/controllers/entries')
  , Entry = require('../../../server/models/entry')
  , expect = require('expect.js');

describe('EntriesController', function() {
  var req = {}
    , res = {
      redirect: function(route) {

      },
      render: function(view, vars) {

      },
      json: function(json, status) {

      }
    };

  before(function(done) {
    // db connection
    // create test data
    done();
  });

  describe('#index()', function() {
    it('should return one entry', function(done) {
      res.json = function(json, status) {
        var string = JSON.stringify(json);
        expect(string).to.eql('[{"name":"Contribute to open source"}]');
        done();
      };

      entriesController.index(req, res);
    });
  });

});