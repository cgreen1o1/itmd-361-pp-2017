$.noConflict();

(function($) {
  $('html').removeClass('nojs').addClass('js');

  function ringDoorbell() {
    var doorbell = new Audio('media/doorbell.mp3');
    doorbell.play();
  }

})(jQuery);
