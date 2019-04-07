if ( window.location.hash ) scroll(0,0);
setTimeout( function() { scroll(0,0); }, 1);

$(function() {

    $('a').on('click', function(e) {
        if (this.hash !== "") {            
            e.preventDefault();
            smoothScroll();
        }
    });

    if(window.location.hash) {
        smoothScroll();
    }

    function smoothScroll() {
        var hash    = this.hash;
        var offset  = $('.header').outerHeight() + 10;
        $('html, body').animate({
            scrollTop: $(hash).offset().top - offset
        }, 800);
    }

})( jQuery ); 
