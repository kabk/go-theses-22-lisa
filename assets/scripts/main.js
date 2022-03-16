// if ( $('body').hasClass('Home') ) {

$(document).ready(function() {

// --------------------------------------------------
// One Page Nav
// --------------------------------------------------

if ( $('body').hasClass('Home') ) {
    $('.menu').onePageNav({
        changeHash: true,
        scrollSpeed: 1000,
        easing: 'swing',
    });
}

// --------------------------------------------------
// Sticky header
// --------------------------------------------------
    var test = $('.hero').height();
    var offset = $('.menu').offset().top;
	var NavTop = test + offset;
    $('.menu-placeholder').height( $('.menu').outerHeight() );
    var $logoHead = $('.logo-head');
    console.log(darkFirst);
    var $logoLight = $('.logo-light');
    var $logoDark = $('.logo-dark');
    var darkFirst = $logoDark.css('display') == 'block';

    	$(window).scroll(function(){
    	  if( $(window).scrollTop() > NavTop ) {
    	    $('.menu-wrapper').addClass('menu-wrapper-fixed');

            if ( $logoLight ) {
                $logoLight.css('display', 'none');
                $logoDark.css('display', 'block');
            }

    	  } else {
    	    $('.menu-wrapper').removeClass('menu-wrapper-fixed');

            if ( $logoDark && !darkFirst ) {
                $logoDark.css('display', 'none');
                $logoLight.css('display', 'block');
            }

    	  }
    	});




// --------------------------------------------------
// Mobile navigation (SlickNav)
// --------------------------------------------------

    $('.menu').slicknav({
        label: '',
        appendTo: '.mobile-nav',
        closeOnClick: true,
        'afterClose': function(){afterClose()},
        'init': function(){mobileOnePageNav()},
    });

    function mobileOnePageNav() {
        $('.slicknav_nav').onePageNav();
    }

    function afterClose() {
        $('.ham-icon').removeClass('open');
    }

    var hamburger = $('.ham-icon');
    hamburger.click(function() {
        hamburger.toggleClass('open');
        $('.menu').slicknav('toggle');

    });

}); 