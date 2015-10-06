$(document).ready(function() {
	
	// $(document).on("click", function(){
	// 	$(".js-popup").hide();
	// });

	// function scrollFixedElements() {
	//     var scroll_left = $(this).scrollLeft();
	//     $(".fixed-element").css({
	//         left: -scroll_left
	//     });
	// }
	// scrollFixedElements();
	// $(window).scroll(function(){
	//     scrollFixedElements()
	// });

	$('.js-range').each(function() {

		var range = $(this),
			rangeText = range.data('text');



		range.slider({
			tooltip: 'always',
			formatter: function(value) {
				return value + rangeText;
			}
		})
		.on('slideStop', function() {			

			var	tooltipBox = $(this).parents('.js-range-parent').find('.tooltip'),
				handle = $(this).parents('.js-range-parent').find('.slider-handle'),
				track = $(this).parents('.js-range-parent').find('.slider-track');

			if (track.position().left >= (handle.position().left - handle.outerWidth())) {
				tooltipBox.css('margin-left', track.position().left - handle.position().left - handle.outerWidth()/2);
			};
			if (track.outerWidth() <= (handle.position().left + handle.outerWidth())) {
				tooltipBox.css('margin-left', track.outerWidth() - tooltipBox.position().left - tooltipBox.outerWidth() + handle.outerWidth()/2);
			};
		})
		.on('slide', function() {			

			var	tooltipBox = $(this).parents('.js-range-parent').find('.tooltip'),
				handle = $(this).parents('.js-range-parent').find('.slider-handle'),
				track = $(this).parents('.js-range-parent').find('.slider-track');

			if (track.position().left >= (handle.position().left - handle.outerWidth())) {
				tooltipBox.css('margin-left', track.position().left - handle.position().left - handle.outerWidth()/2);
			};
			if (track.outerWidth() <= (handle.position().left + handle.outerWidth())) {
				tooltipBox.css('margin-left', track.outerWidth() - tooltipBox.position().left - tooltipBox.outerWidth() + handle.outerWidth()/2);
			};
		});
	});


	
	$('.js-nav').each(function() {
		var nav = $(this),
			navBtn = $('.js-nav-btn');

		navBtn.click(function() {
			nav.toggleClass('is-active');
			return false;
		});
		$('body').click(function() {			
			nav.removeClass('is-active');
		});
		nav.click(function(event) {
			event.stopPropagation();
		});
	});

});