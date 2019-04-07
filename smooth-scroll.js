if ( window.location.hash ) scroll(0,0);
setTimeout( function() { scroll(0,0); }, 1);

(function($) {

    $('a[href^="#"]')
        // Remove links that don't actually link to anything
      .not('[href="#"]')
      .not('[href="#0"]')
      .on('click', function(e) {         
        e.preventDefault();
        var hash    = this.hash;
        smoothScroll(hash);
    });

    if(window.location.hash) {
        smoothScroll(window.location.hash);
    }

    function smoothScroll(hash) {  
        var target  = $(hash);
        if (target.length) {   
            var offset  = $('.header').outerHeight() + 10;
            $('html, body').animate({
                scrollTop: $(hash).offset().top - offset
            }, 800);
        } else {
            console.log('cannot find target: '+hash);
        }
    }

})( jQuery ); 
