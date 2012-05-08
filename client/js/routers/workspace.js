define([
    'zepto'
  , 'backbone'
  , 'views/entries-list'
  , 'collections/entries'
  ], function(
    $
  , Backbone
  , EntriesListView
  , Entries
  ) {
  
  var Router = Backbone.Router.extend({
    routes : {
      '': 'home'
    },

    initialize: function() {
      // fetching entries once on app start
      this.entries = new Entries();
      this.entries.fetch();
    },

    home : function() {
      var entriesListView = new EntriesListView({ collection: this.entries });
      entriesListView.render();
      $('body').html(entriesListView.$el);
    }

  });

  return Router;
});