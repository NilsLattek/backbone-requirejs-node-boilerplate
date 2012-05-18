// validation logic is shared between client and server
var entryValidation = require('../../shared/js/entry-validation');

// just for demonstration, normally you would store everything in a database
var entries = [
  {name: "Contribute to open source"}
];

var Entry = function() {

};

Entry.all = function(callback) {
  if (callback) callback(null, entries);
};

Entry.add = function(entry, callback) {
  // validate using shared module
  var invalid = entryValidation.validate(entry);
  if (invalid) {
    console.log('Entry is invalid: ' + invalid);
    if (callback) callback(new Error('Invalid attributes: ' + invalid));
    return;
  }

  entries.push(entry);

  if (callback) callback(null);
};

module.exports = Entry;