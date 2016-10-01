(function ( $ ) {
	'use strict';

	// Slider home
	// -------------------------
	$(function sliderHome() {
		$('.slider-highlights').owlCarousel({
			items: 1,
	        autoplaySpeed: 1000,
	        autoplayTimeout: 7000,
	        autoplay: true,
	        nav: false,
	        loop: true 
		})
	});

}( jQuery ));

