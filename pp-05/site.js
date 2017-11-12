$.noConflict();

(function($) {
  var doorbell = new Audio('media/doorbell.mp3');
  var image = new Image();
  image.src= 'media/doorbell.png';

  $('html').removeClass('nojs').addClass('js');

  $('#doorbell').html('<a href="#doorbell">Click to Ring the Doorbell</a><img src="media/doorbell.png">');

  $('#doorbell').on('click', function() {
    doorbell.play();
  });

  $('h1').append(image);
  $('audio').remove();

  $('html').on('keyup', function(e){
    if (e.which === 68) {
      doorbell.play();
    }
  });

})(jQuery);
