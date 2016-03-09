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
