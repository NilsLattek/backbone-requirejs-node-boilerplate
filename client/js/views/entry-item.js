define([
    'zepto'
  , 'underscore'
  , 'backbone'
  , 'handlebars'
  , 'text!templates/entry-item.handlebars'
  ], function(
    $
  , _
  , Backbone
  , Handlebars
  , template
  ) {
  
  var EntryItemView = Backbone.View.extend({
    tagName: 'li',

    template: Handlebars.compile(template),

    initialize: function() {
      _.bindAll(this, 'render');

      this.model.bind('change', this.render, this);
      this.model.bind('destroy', this.remove, this);
    },

    onClose: function() {
      this.model.unbind('change', this.render);
      this.model.unbind('destroy', this.remove);
    },

    render: function() {
      this.$el.html(this.template( this.model.toJSON() ));
      return this;
    }

  });

  return EntryItemView;
});
