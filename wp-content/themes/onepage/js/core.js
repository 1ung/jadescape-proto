$(document).ready(function () {   
 
 	
$("#menuTrigger").click(function () {
    $(this).toggleClass("open");
    $(".overlay-hugeinc").toggleClass("open");
    $("body").toggleClass("modal-open");
    return false;
});
$(".overlay ul li a").click(function () {
    $("#menuTrigger").toggleClass("open");
    $(".overlay-hugeinc").toggleClass("open");
    $("body").toggleClass("modal-open");
    return false;
}); 
	

// Cache the div so that the browser doesn't have to find it every time the window is resized.
var $div = $('.overlay ul li a');

// Run the following when the window is resized, and also trigger it once to begin with.
$(window).resize(function () {
  // Get the current height of the div and save it as a variable.
  var height = $div.height();
  // Set the font-size and line-height of the text within the div according to the current height.
  $div.css({
      'font-size': (height / 2) + 'px',
      'line-height': height + 'px'
  })
}).trigger('resize');	


	$(".header").hover(
		function () {
			$(this).stop().animate({opacity:'1'}, 300);
		}, function() {
			$(this).stop().animate({opacity:'0.8'}, 300);
	});
	
	if (Modernizr.mq('(min-width: 1024px)') && !Modernizr.touchevents) {
		$(function(){
			$('.fullbgtext').css({'height': (($(window).height()))+'px'});
		});
	};
	
	
	$(window).resize(function(){
		if (Modernizr.mq('(min-width: 1024px)') && !Modernizr.touchevents) {
			$('.fullbgtext').css({'height': (($(window).height()))+'px'});
		}
		else {
			$('.fullbgtext').css({'height': 'auto'});
		}
	});
	
	function parallax (){
		var rellax = new Rellax('.rellax');
	}
	
	if (Modernizr.mq('(min-width: 900px)')) {
		setTimeout(parallax, 500);
	};

	
		
	
	/* Dynamic top menu positioning
	 *
	 */

	var num = 20; //number of pixels before modifying styles
	$(window).bind('scroll', function () {
		if ($(window).scrollTop() > num) {
			$('#header').addClass('fixed');
		} else {
			$('#header').removeClass('fixed');
		}
	});
	$(window).bind('load', function () {
		if ($(window).scrollTop() > num) {
			$('#header').addClass('fixed');
		} else {
			$('#header').removeClass('fixed');
		}
	});
	
	
	$(window).resize(function(){
		if (Modernizr.mq('(min-width: 1024px)') && !Modernizr.touchevents) { 
	    var num1 = ($(window).height()); //number of pixels before modifying styles
			$(window).bind('scroll', function () {
		    if ($(window).scrollTop() > num1) {
	        $('#home .header').addClass('fixed');
		    } else {
		      $('#home .header').removeClass('fixed');
		    }
			});
		}
	});
	
	$(".dropdown-toggle").click(function(e) {
	    e.preventDefault();
	    e.stopPropagation();
	    $(this).parent(".dropdown-group").toggleClass("open");
	});

});