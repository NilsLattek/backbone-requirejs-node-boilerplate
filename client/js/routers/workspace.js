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

    showView: function(view) {
      if (this.currentView) {
        this.currentView.close();
      }

      this.currentView = view;
      this.currentView.render();
      $('body').html(this.currentView.el);
    },

    home : function() {
      var entriesListView = new EntriesListView({ collection: this.entries });
      this.showView(entriesListView);
    }

  });

  return Router;
});