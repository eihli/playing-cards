document.addEventListener("DOMContentLoaded", function(event) {
  
  console.log("Screen width: ", screen.width);
  console.log("Window.innerWidth: ", window.innerWidth);
  console.log("Scale ratio: ", window.innerWidth / screen.width);

  var body = document.getElementsByTagName("body")[0];
  var originalFontSize = parseInt(window.getComputedStyle(body, null)['font-size']);

  window.onresize = resize;
  resize();

  var scaleRatio = window.innerWidth / screen.width;
  function resize() {
    scaleRatio = window.innerWidth / screen.width;
    body.style.fontSize = (originalFontSize * scaleRatio) + "px";
    console.log(originalFontSize * scaleRatio);
  };

});