$(document).ready(function($){
	"use strict";

	// WOW Js Active
	new WOW().init();

	// ---- Active
    $(".owl-carousel-testimonial").owlCarousel({
	    loop:true,
	    margin:30,
	    nav:false,
	    items:1,    	
	});
    // Owl Next Privew Change
    //$( ".owl-prev").html('<i class="fa screenshort-arow fa-chevron-left"></i>');
    //$( ".owl-next").html('<i class="fa screenshort-arow fa-chevron-right"></i>');

    // Magific Popup
	$('#video-link').magnificPopup({
		type:'iframe',
		iframe: {
		  patterns: {
		    youtube: {
		      index: 'youtube.com/',
		      id: 'v=',
		      src: 'http://www.youtube.com/embed/%id%?autoplay=1'
		    },
		  },
		  srcAction: 'iframe_src'
		}
	});
    // Magific Portfolio item Popup
    $('.image-link').magnificPopup({
    	type:'image',
    		image: {

			  cursor: 'mfp-zoom-out-cur', 

			  titleSrc: 'title', 
			  verticalFit: true,

			  tError: '<a href="%url%">The image</a> could not be loaded.' // Error message
			}

    });

	// Skill Bar
	$('.skillbar').skillBars({
	  // options here
	});


	// Cunter Up

$('.counter').each(function() {
  var $this = $(this),
      countTo = $this.attr('data-count');
  
  $({ countNum: $this.text()}).animate({
    countNum: countTo
  },

  {

    duration: 8000,
    easing:'linear',
    step: function() {
      $this.text(Math.floor(this.countNum));
    },
    complete: function() {
      $this.text(this.countNum);
      //alert('finished');
    }

  });  
});


// Mixitup
var mixer = mixitup('.portfolio-content');


// Our Team Section
$('.owl-carousel-team').owlCarousel({
    loop:true,
    margin:30,
    nav:false,
    item:4,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
})

// Testimonial
$('.').owlCarousel({
    loop:false,
    margin:30,
    nav:true,
    item:1,
})



////////////////////////
}(jQuery));


