var requirejs = require('requirejs');

// setup requirejs for testing
requirejs.config({
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
  baseUrl: 'client/js',
  nodeRequire: require,
  paths: {
      zepto: 'libs/zepto'
    , underscore: 'libs/underscore'
    , backbone: 'libs/backbone'
    , text: 'libs/require/text'
    , handlebars: 'libs/handlebars'
  }
});


global.define = requirejs;
jsdom = require("jsdom").jsdom;
global.document = jsdom();
global.window = global.document.parentWindow;
global.navigator = window.navigator;
window = global.window;

module.exports = requirejs;