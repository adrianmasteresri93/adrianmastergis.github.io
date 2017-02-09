'use strict';


  // Le añado un listener (o disparador), cuando se haga click
  require([
          "dojo/dom",
          "dojo/on",
          "dojo/fx",
          "dojo/domReady!"
        ],function(dom, on, fx){
          var el = dom.byId("contenedor");
          el.innerHTML = "Haz clic!";
          // Establecemos el nodo sobre el que se realizará el evento, el tipo de evento
          // y la función que desencadena
          on(el, "click", function(evt){
            fx.slideTo({
              node: el,
              top: 100,
              left:300
            }).play();
          });

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
