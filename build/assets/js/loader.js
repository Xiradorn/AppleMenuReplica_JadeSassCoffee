var fadeOutX;

window.onload = function() {
  var x;
  x = document.getElementById('loader');
  return setTimeout(fadeOutX(x, 'slow'), 400);
};

fadeOutX = function(trg, mode) {
  var intVal, tm;
  if (mode == null) {
    mode = 'fast';
  }
  if (mode === 'slow') {
    tm = 5;
  } else {
    tm = 2;
  }
  return intVal = setInterval(function() {
    if (!trg.style.opacity) {
      trg.style.opacity = 1;
    }
    if (trg.style.opacity < 0.008) {
      clearInterval(intVal);
      return trg.parentNode.removeChild(trg);
    } else {
      return trg.style.opacity -= 0.008;
    }
  }, tm);
};
