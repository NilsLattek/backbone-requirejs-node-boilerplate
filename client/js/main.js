require.config({
  shim: {
    'zepto': {
      exports: 'Zepto'
    },
    'underscore': {
      exports: '_'
    },
    'backbone': {
      //These script dependencies should be loaded before loading
      //backbone.js
      deps: ['underscore', 'zepto'],
      //Once loaded, use the global 'Backbone' as the
      //module value.
      exports: 'Backbone'
    },
    'handlebars': {
      exports: 'Handlebars'
    }
  },
  paths: {
      zepto: 'libs/zepto'
    , underscore: 'libs/underscore'
    , backbone: 'libs/backbone'
    , text: 'libs/require/text'
    , handlebars: 'libs/handlebars'
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