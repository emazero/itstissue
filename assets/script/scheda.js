$(document).ready(function() {
   
   
   	$(".close-scheda").click(function(e) {
   		e.preventDefault();
   		//$("#scheda-cont-wrapper .container").css(["display","none"]);
   		$("#scheda-cont-wrapper").slideToggle('slow', function() {
   			$("html, body").animate({
   				scrollTop: $('.nav-loghi').offset().top - 160
   			}, 500);
   		});
   	});
   	
   	$("#owl-demo").owlCarousel({
 
      navigation : true, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true,
      pagination: false
 
      // "singleItem:true" is a shortcut for:
      // items : 1, 
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false
 
  });
  
  
});