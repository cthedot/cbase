;
(function () {
  "use strict";

  /*
    call at end of HTML (before onload or onready):

    enableFonts([{
      name: 'Source Sans Pro'
    }, {
      name: 'Source Sans Pro',
      variation: {
        weight: 600
        // style: 'italic'
      }
    }])
  */

  window.enableFonts = function(fontsConfig) {
    var html = document.documentElement;
    var script = document.createElement("script");
    script.src = "js/lib/fontfaceobserver.js";
    script.async = true;
    script.onload = function () {
      var fonts = []

      fontsConfig.forEach(function(font, i) {
        fonts.push(new FontFaceObserver(font.name, font.variation || undefined))
      })
      Promise.all(
        fonts.map(function (font) {
          return font.load()
        })
      ).then(function () {
        html.classList.add("fonts-loaded");
      }).catch(function (e) {
        console.log(e)
      });
    };
    document.head.appendChild(script);
  }

})();