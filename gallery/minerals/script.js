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
     // bind filter on select change
    $('.portfolioFilter').on( 'change', function() {
      // get filter value from option value
      var filterValue = this.value;
      // use filterFn if matches value
      $container.isotope({ filter: filterValue });
    });

    $('.loader').hide();
    $(".container").css('visibility','visible');
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