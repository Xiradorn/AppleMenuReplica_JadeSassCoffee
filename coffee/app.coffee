$(window).load ()->
	$('#loader')
		.delay 400
		.fadeOut 'fast'

$(".xirfloat-menu ul li").hover () ->
		$(@).next()
			.addClass 'hovering'
		$(@).prev()
			.addClass 'hovering'
	, () ->
		$(@).next()
			.removeClass 'hovering'
		$(@).prev()
			.removeClass 'hovering'
