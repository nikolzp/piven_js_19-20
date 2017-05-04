'use strict';

$(function() {
	let $accordion = $('.panel__click');

	$accordion.on('click', function() {

		if ($(this).hasClass('active')) {
			let $indicator = $(this).find('.panel__indicator');
			$indicator.css('background', 'url(img/panel-indicator-plus.png)  no-repeat center');
			$accordion.css('background-color', 'white');
			$(this).removeClass('active');
			$(this).siblings('.panel__info').slideUp(500);
			
		} else {
			let $indicator = $(this).find('.panel__indicator');
			$accordion.removeClass('active');
			$('.panel__indicator').css('background', 'url(img/panel-indicator-plus.png)  no-repeat center')
			$accordion.css('background-color', 'white');
			$(this).addClass("active");
			$('.panel__info').slideUp(500);
			$(this).siblings('.panel__info').slideDown(500);
			$indicator.css('background', 'url(img/panel-indicator-minus.png)  no-repeat center')
			$($(this).css('background', '#f4b60d'));
			
			
		}
	})
})