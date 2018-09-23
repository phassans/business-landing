/* ======================================
	
	Template: Moto - App Landing Page
	Css Name: Main.1 Js
	Version: 1
	Design and Developed by: Hastech

========================================= */

/*================================================
[  Table of contents  ]
================================================
	1. scrollUp
	2. Wow JS 
	
================================================*/

(function ($) {
 "use strict";
	// 13. scrollUp
	$.scrollUp({
		scrollText: '<i class="fa fa-angle-up"></i>',
		easingType: 'linear',
		scrollSpeed: 900,
		animation: 'fade'
	});
	
	// 14. Wow JS 
	new WOW().init();
	
})(jQuery);  