'use strict';




  var $win = $(window),
      w = 0,h = 0,
      rgb = [],
      getWidth = function() {
          w = $win.width();
          h = $win.height();
      };

  $win.resize(getWidth).mousemove(function(e) {

      rgb = [
          Math.round(e.pageX/w * 255),
          Math.round(e.pageY/h * 255),
          150
      ];

      $(document.body).css('background','rgb('+rgb.join(',')+')');

  }).resize();
  $(function(){
  var img  = $('#img');

  $('#incr').on('click', function(){
  	img.width(img.width()*1.1);
  	img.height(img.height()*1.1);
  });

  $('#decr').on('click', function(){
  	img.width(img.width()/1.1);
  	img.height(img.height()/1.1);
  });
});
