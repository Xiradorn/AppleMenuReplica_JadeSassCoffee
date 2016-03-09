window.onload = ()->
	x = document.getElementById 'loader'
	setTimeout fadeOutX(x, 'slow')
	, 400

fadeOutX = (trg, mode = 'fast') ->
    if mode == 'slow'
        tm = 5
    else
        tm = 2
    intVal = setInterval ->
    		if !trg.style.opacity
    			trg.style.opacity = 1

    		if trg.style.opacity < 0.008
    			clearInterval intVal
    			trg.parentNode.removeChild trg
    		else
    			trg.style.opacity -= 0.008
	    , tm
