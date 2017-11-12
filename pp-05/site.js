$.noConflict();

(function($) {
  var doorbell = new Audio('media/doorbell.mp3');
  var image = new Image();
  image.src= 'media/doorbell.png';

  $('html').removeClass('nojs').addClass('js');

  function ringDoorbell() {
    var doorbell = new Audio('media/doorbell.mp3');
    doorbell.play();
  }

})(jQuery);
