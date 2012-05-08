require.config({
  paths: {
      zepto: 'libs/zepto/wrapper'
    , underscore: 'libs/underscore/wrapper'
    , backbone: 'libs/backbone/wrapper'
    , order: 'libs/require/order'
    , text: 'libs/require/text'
    , handlebars: 'libs/handlebars/wrapper'
  }
});

require([
    'backbone'
  , 'routers/workspace'
  , 'views/page'
  ], function(
    Backbone
  , Router) {

  var router = new Router();

  Backbone.history.start({pushState: false});
});