//ISOTOPE
$(window).load(function(){
    var $container = $('.portfolioContainer');//THIS IS THE NAME OF THE CLASS FOR THE CONTAINER THAT WILL HOLD THE PORTFOLIO IMAGES
    $container.isotope({
        filter: '*',
        animationOptions: {
            duration: 750,      //TIMING IN MS
            easing: 'linear',   //EASING
            queue: false
        }
    });
 
    $('.portfolioFilter a').click(function(){
        $('.portfolioFilter .current').removeClass('current');
        $(this).addClass('current');
 
        var selector = $(this).attr('data-filter');
        $container.isotope({
            filter: selector,
            animationOptions: {
                duration: 750,     //TIMING IN MS
                easing: 'linear',  //EASING
                queue: false
            }
         });
         return false;
    }); 
});


//PRETTYPHOTO
$(document).ready(function(){
		$("a[rel^='prettyPhoto']").prettyPhoto({
			slideshow: 5000,
			autoplay_slideshow: false,
			theme: 'pp_default', /* light_rounded / dark_rounded / light_square / dark_square / facebook */
			social_tools: "",
            deeplinking:false
		});
	});