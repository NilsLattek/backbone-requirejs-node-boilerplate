define([
    'zepto'
  , 'backbone'
  , 'entry-validation'
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
