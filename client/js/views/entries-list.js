define([
    'zepto'
  , 'underscore'
  , 'backbone'
  , 'handlebars'
  , 'text!templates/entries-list.handlebars'
  , 'views/entry-item'
  ], function(
    $
  , _
  , Backbone
  , Handlebars
  , template
  , EntryItemView
  ) {

  var EntriesListView = Backbone.View.extend({

    id: 'entries-list-view',

    template: Handlebars.compile(template),

    events: {
      "keypress #new-entry":  "createOnEnter"
    },

    initialize: function() {
      _.bindAll(this, 'render', 'addOne', 'addAll');

      this.collection.bind('add', this.addOne);
      this.collection.bind('reset', this.addAll);
    },

    onClose: function() {
      this.collection.unbind('add', this.addOne);
      this.collection.unbind('reset', this.addAll);
    },

    render: function() {
      this.$el.html(this.template());
      this.list = this.$el.find('ul');
      this.input = this.$("#new-entry");

      this.addAll();

      return this;
    },

    addOne: function(entry) {
      var view = new EntryItemView({ model: entry });
      this.list.append(view.render().el);
    },

    addAll: function() {
      this.collection.each(this.addOne);
    },

    createOnEnter: function(e) {
      if (e.keyCode != 13) return;
      
      var success = this.collection.create({name: this.input.val()});
      if (!success) {
        console.log('Validation failed!');
      }
      this.input.val('');
    }

  });

  return EntriesListView;
});
