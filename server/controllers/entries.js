var Entry = require('../models/entry');

module.exports = {
  index: function(req, res) {
    Entry.all(function(err, entries) {
      if (err) {
        res.json('Error while loading entries.', 500);
      }

      res.json(entries);
    })
    
  },

  create: function(req, res) {
    if (!req.body) {
      res.json('Error: Body is empty.', 400);
    }

    Entry.add(req.body, function(err) {
      if (err) {
        res.json('Error while adding entry: ' + err.message, 500);
        return;
      }

      // when using a database you would return the inserted object, with the new id
      res.json(req.body);
    })
  }
}