// thanks to http://lostechies.com/derickbailey/2011/09/15/zombies-run-managing-page-transitions-in-backbone-apps/
define([
    'zepto'
  , 'backbone'
  ], function(
    $
  , Backbone) {

  Backbone.View.prototype.close = function(){
    this.remove();
    this.unbind();
    if (this.onClose){
      this.onClose();
    }
  };
  
});
