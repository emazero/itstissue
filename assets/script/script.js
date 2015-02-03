$(document).ready(function() {
 
  $("#owl-carousel").owlCarousel({
 
    // Most important owl features
    items : 3,
    itemsCustom : false,
    itemsDesktop : [1199,3],
    itemsDesktopSmall : [980,3],
    itemsTablet: [768,2],
    itemsTabletSmall: false,
    itemsMobile : [479,1],
    singleItem : false,
    itemsScaleUp : false
    });
 
});


$(document).ready(function() {

$(".menu-lines").click(function(e) {
e.preventDefault();
	$('#mobile-menu').toggleClass( "visible" );
});
$("#mobile-menu a").click(function() {
	$('#mobile-menu').toggleClass( "visible" );
});

$('.hidden').addClass('trans');
/*$('.hidden').css('opacity','0');*/
$(window).on('scroll', function() {
    var scrollTop = $(this).scrollTop();

    $('.hidden').each(function() {
        var topDistance = $(this).offset().top;

        if ( (topDistance-700) < scrollTop ) {
            $(this).removeClass('hidden');
            

    var delays = [2000, 2500];
    $(this).each(function (i) {
        setTimeout(function (li) {
            li.removeClass('hidden');
        }, delays[i], $(this));
    });


            }
    });
});


    

$(".menu-logo a").click(function(e) {	
e.preventDefault();
 $("nav li").removeClass('active');
 $("html, body").animate({ scrollTop:0 }, 1000);
});

$("nav li.item").click(function(e) {	
e.preventDefault();
var page = $('a',this).attr('href');
 $("nav li").removeClass('active');
 $(this).addClass('active');
 $("html, body").animate({ scrollTop: $(page).offset().top - 120 }, 1000);
});

$(".lang-flags .btn.nolink").click(function(e) {	
e.preventDefault();
var page = $('a',this).attr('href');
 $("nav li").removeClass('active');
 //$(this).addClass('active');
 $("html, body").animate({ scrollTop: $(page).offset().top - 120 }, 1000);
});


$("#mobile-menu a.item").click(function(e) {	
e.preventDefault();
var pagem = $(this).attr('href');
 $("html, body").animate({ scrollTop: $(pagem).offset().top - 60 }, 1000);
});



$(function() {
 
    // grab the initial top offset of the navigation 
    var sticky_navigation_offset_top = $('#top-menu').offset().top;
     
    // our function that decides weather the navigation bar should have "fixed" css position or not.
    var sticky_navigation = function(){
        var scroll_top = $(window).scrollTop(); // our current vertical position from the top
         
        // if we've scrolled more than the navigation, change its position to fixed to stick to top,
        // otherwise change it back to relative
        if (scroll_top > sticky_navigation_offset_top-30) { 
            $('#top-menu').removeClass('no-sticky');
			$('#top-menu').addClass('sticky');
        } else {
            $('#top-menu').addClass('no-sticky');
			$('#top-menu').removeClass('sticky'); 
        }   
    };
     
    // run our function on load
    sticky_navigation();
     
    // and run it again every time you scroll
    $(window).scroll(function() {
         sticky_navigation();
    });
 
});


 $('.nav-loghi li a').mouseover(function(){
 var src = $('img', this).attr('src');
      $('img', this).attr('src', src.replace('.png', '-hover.png'));
    });
   $('.nav-loghi li a').mouseout(function(){
 var src = $('img',this).attr('src');
      $('img',this).attr('src', src.replace('-hover.png', '.png'));
    });


//$( ".close-scheda" ).click(function() {	
//alert('close!');
  //$( "#scheda-cont-wrapper" ).slideToggle( "slow");
  //$("html, body").animate({ scrollTop: $('.nav-loghi').offset().top -100 }, 1000);

//});

$( ".scrolldown" ).click(function(event) {
	event.preventDefault();
	$("html, body").animate({ scrollTop: $('#intro').offset().top - 60 }, 1000);
});
$( ".nav-loghi li a" ).click(function(event) {
event.preventDefault();
var a_href = $(this).attr('href');
//alert(a_href);
$('#scheda-cont-wrapper').load('inc/'+a_href, function() {
   $("html, body").stop().animate({ scrollTop: $('#scheda-cont-wrapper').offset().top - 60 }, 1000);
   if($('#scheda-cont-wrapper').css('display') === 'none'){
  $( "#scheda-cont-wrapper" ).slideToggle( "slow", function() {
   $("html, body").animate({ scrollTop: $('#scheda-cont-wrapper').offset().top - 60 }, 1000);
  });
  
  }

       
});

  
  
  
 });



});