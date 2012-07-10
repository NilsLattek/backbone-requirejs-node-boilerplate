// https://github.com/jrburke/amdefine
if (typeof define !== 'function') { var define = require('amdefine')(module); }

/* require additional modules if needed
define(['./other-module.js'], function (other-module) {*/
define([], function () {
  return {
    validate: function(attrs) {
      if (!attrs.name) {
        return 'Name should not be empty.';
      }
    }
  };
});