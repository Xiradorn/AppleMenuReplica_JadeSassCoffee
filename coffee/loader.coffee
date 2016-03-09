window.onload = ()->
	x = document.getElementById 'loader'
	setTimeout fadeOutX(x, 'fast')
	, 400

fadeOutX = (trg, mode) ->
    if mode is 'slow'
        tm = 2
    else
        tm = 20
    intVal = setInterval ->
    		if !trg.style.opacity
    			trg.style.opacity = 1

    		if trg.style.opacity < 0.01
    			clearInterval intVal
    			trg.parentNode.removeChild trg
    		else
    			trg.style.opacity -= 0.01
	    , tm
