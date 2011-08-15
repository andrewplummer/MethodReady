(function($) {

  var throttle = 100;
  var key = 'method-ready-timer';

  var setTimer = function(el, method, fn) {
    el.data(key, setTimeout(function(){
      el.methodReady(method, fn);
    }, throttle));
  };

  var checkTimer = function(el) {
    var timer = el.data(key);
    if(timer) {
      clearTimeout(timer);
      el.removeData(key);
    }
  };

  $.fn.methodReady = function(method, fn) {
    this.each(function() {
      var el = $(this);
      checkTimer(el);
      if(this[method]) {
        fn.call(this);
      } else {
        setTimer(el, method, fn);
      }
    });
    return this;
  };

})(jQuery);
