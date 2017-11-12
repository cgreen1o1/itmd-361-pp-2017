$.noConflict();

(function($) {
  var doorbell = new Audio('media/doorbell.mp3');
  var image = new Image();
  image.src= 'media/doorbell.png';

  $('html').removeClass('nojs').addClass('js');

  $('#doorbell').html('<a href="#doorbell">Click to Ring the Doorbell</a><img src="media/doorbell.png">');

  $('#doorbell').on('click', function() {
    doorbell.play();
    document.getElementById('rang').style.display = 'block';
    document.body.style.background = 'yellow';
    setTimeout(function(){
      document.body.style.background = 'white';
      document.getElementById('rang').style.display = 'none';
    }, 2328);
  });

  $('audio').hide();

  $('html').on('keyup', function(e){
    if (e.which === 68) {
      doorbell.play();
      document.getElementById('rang').style.display = 'block';
      document.body.style.background = 'yellow';
      setTimeout(function(){
        document.body.style.background = 'white';
        document.getElementById('rang').style.display = 'none';
      }, 2328);
    }
  });

})(jQuery);
