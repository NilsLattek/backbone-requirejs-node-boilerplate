define([
    'zepto'
  , 'backbone'
  , '../../../shared/js/entry_validation'
  ], function(
    $
  , Backbone
  , entryValidation
  ) {

  var Entry = Backbone.Model.extend({

    validate: function(attrs) {
      // validation used from shared module
      return entryValidation.validate(attrs);
    }
  });

  return Entry;
});
