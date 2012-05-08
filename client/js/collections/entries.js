define([
    'zepto'
  , 'backbone'
  , 'models/entry'
  ], function(
    $
  , Backbone
  , Entry
  ) {
  
  var Entries = Backbone.Collection.extend({

    model: Entry,

    url: '/entries'
  });

  return Entries;
});
