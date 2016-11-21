/**
 * @file
 * Placeholder file for custom sub-theme behaviors.
 *
 */
(function ($, Drupal) {

	// setup initial vars
	var htmlClass = document.documentElement.classList,
		getTag = (function(el) { return el.tagName.toLowerCase(); });
	
	
	// initialize foundation
    //$(document).foundation();




	// trigger menu on hamburger click
	$("#hamburger").on("click", function(evt) {
		evt.preventDefault();
		htmlClass.toggle("touch-nav-active");
	});


	// open external links in new window
	document.addEventListener("click", function(e) {
		var a = getTag(e.target) === "a" ? e.target : ( getTag(e.target.parentNode) === "a" ? e.target.parentNode : null );
		if ( a && a.host !== window.location.host && !a.matches(".exclude") ) {
			e.preventDefault();
			window.open( a.href );
		}
	});
	
	
	
	
	
	// close alert boxes
	$(".alert-box .close").on("click", function(evt) {
		evt.preventDefault();
		this.parentNode.classList.add("fade-out");
	});

})(jQuery, Drupal);