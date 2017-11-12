$.noConflict();

(function($) {
  var doorbell = new Audio('media/doorbell.mp3');
  var image = new Image();
  image.src= 'media/doorbell.png';

  $('html').removeClass('nojs').addClass('js');

  $('#doorbell').on('click', function() {
    doorbell.play();
  });

  $('h1').append(image);
  $('audio').remove();

})(jQuery);
