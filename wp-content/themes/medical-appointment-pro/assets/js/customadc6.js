/**
 * Exoplanet Custom JS
 *
 * @package Exoplanet
 *
 * Distributed under the MIT license - http://opensource.org/licenses/MIT
 */

jQuery(function($) {
    /* Top Search */
    jQuery('.search-box span i').click(function(){
        jQuery(".serach_outer").toggle();
    });

    $('.search-box span i').click(function(){
      $(".serach_outer").slideDown(700);
    });
    
    $('.closepop i').click(function(){
      $(".serach_outer").slideUp(700);
    });
});

/* Mobile responsive Menu*/

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

jQuery('document').ready(function(){


    var owl = jQuery('#banner .owl-carousel');
    owl.owlCarousel({
    margin: 20,
    stagePadding:10,
    nav: true,
    autoplay : true,
    lazyLoad: true,
    autoplayTimeout: 1000,
    loop: true,
    dots:false,
    navText : ['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],
    responsive: {
      0: {
        items: 2
      },
      767: {
        items: 4
      },
      992: {
        items: 4
      },
      1200: {
        items: 5
      }
    },
    autoplayHoverPause : true,
    mouseDrag: true,
    });


    var owl = jQuery('#our-process .owl-carousel');
      owl.owlCarousel({
      margin:20,
      nav: true,
      autoplay : true,
      lazyLoad: true,
      autoplayTimeout: 3000,
      loop: false,
      dots: true,
      navText : ['<i class="fa fa-chevron-left" aria-hidden="true"></i>','<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
      responsive: {
        0: {
          items: 1
        },
        576: {
          items: 2
        },
        768: {
          items: 3
        },
        1000: {
          items: 4
        }
      },
      autoplayHoverPause : true,
      mouseDrag: true
    });

    var owl = jQuery('#testimonial .owl-carousel');
      owl.owlCarousel({
      margin:40,
      nav: false,
      autoplay : true,
      lazyLoad: true,
      autoplayTimeout: 3000,
      loop: true,
      dots:true,
      navText : ['<i class="fa-solid fa-arrow-left" aria-hidden="true"></i>','<i class="fa-solid fa-arrow-right" aria-hidden="true"></i>'],
      responsive: {
        0: {
          items: 1
        },
        576: {
          items: 2
        },
        768: {
          items: 2
        },
        1000: {
          items: 3
        }
      },
      autoplayHoverPause : true,
      mouseDrag: true
    });

    var owl = jQuery('#teams .owl-carousel');
    owl.owlCarousel({
    margin:30,
    nav: false,
    rtl:true,
    autoplay : true,
    lazyLoad: true,
    autoplayTimeout: 3000,
    loop: true,
    dots: false,
    navText : ['<i class="fa-solid fa-arrow-left" aria-hidden="true"></i>','<i class="fa-solid fa-arrow-right" aria-hidden="true"></i>'],
    responsive: {
      0: {
        items: 1
      },
      576: {
        items: 2
      },
      992: {
        items: 2
      },
      1200: {
        items: 2
      }
    },
    autoplayHoverPause : true,
    mouseDrag: true
  });

  var owl = jQuery('#what-we-do .owl-carousel');
  owl.owlCarousel({
  margin: 20,
  rtl:true,
  nav:true,
  center: true,
  autoplay : true,
  loop: true,
  lazyLoad: true,
  autoplayTimeout: 2000,
  dots: true,
  autoplayHoverPause:true,
  navText : ['<i class="fa-solid fa-chevron-left" aria-hidden="true"></i>','<i class="fa-solid fa-chevron-right" aria-hidden="true"></i>'],
  responsive: {
    0: {
      items: 1
    },
    576: {
      items: 1
    },
    992: {
      items: 3
    },
    1200: {
      items: 3
    }
  },
  autoplayHoverPause : true,
  mouseDrag: true
});

    var owl = jQuery('#our-services .owl-carousel');
      owl.owlCarousel({
      margin:50,
      nav: false,
      autoplay : true,
      lazyLoad: true,
      autoplayTimeout: 2000,
      loop: true,
      dots:false,
      navText : ['<i class="fa fa-chevron-left" aria-hidden="true"></i>','<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
      responsive: {
        0: {
          items: 1
        },
        576: {
          items: 2
        },
        768: {
          items: 2
        },
        992: {
          items: 3
        },
        1200: {
          items: 4
        }
      },
      autoplayHoverPause : true,
      mouseDrag: true
    });
});

jQuery('document').ready(function() {

  jQuery('#register .count').each(function () {
      jQuery(this).prop('Counter',0).animate({
          Counter: jQuery(this).text()
      }, {
          duration: 8000,
          easing: 'swing',
          step: function (now) {
             jQuery(this).text(Math.ceil(now));
          }
      });
  });

  var footer1=jQuery('#contact-details').outerHeight();
  jQuery('.google-map iframe').height(footer1);

  // ------------ Scroll Top ---------------

  jQuery(window).scroll(function() {
    if (jQuery(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
      jQuery('#return-to-top').fadeIn(200);    // Fade in the arrow
    } else {
      jQuery('#return-to-top').fadeOut(200);   // Else fade out the arrow
    }
  });
  jQuery('#return-to-top').click(function() {      // When arrow is clicked
    jQuery('body,html').animate({
      scrollTop : 0                       // Scroll to top of body
    }, 2000);
  });


});

// ------------ Sticky Navbar -------------------

window.onscroll = function() { 
  if ( jQuery('#sticky-onoff').html() == 'yes' ) {
    myScrollNav()
  }
};

var navbar = document.getElementById("header");
var sticky = navbar.offsetTop;
function myScrollNav() {

  if (window.pageYOffset > sticky) {
    //alert(window.pageYOffset);
    navbar.classList.add("sticky");
    navbar.classList.add("stickynavbar");
  } else {
    navbar.classList.remove("sticky");
    navbar.classList.remove("stickynavbar");
  }
}

jQuery(function() {
  jQuery("#addClass").click(function () {
    jQuery('#qnimate').addClass('popup-box-on');
      });
    jQuery("#removeClass").click(function () {
      jQuery('#qnimate').removeClass('popup-box-on');
    });
})

//Loader
jQuery(window).load(function() {
  jQuery(".preloader").delay(2000).fadeOut("slow");
});


// Get the modal element
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var openModalButton = document.getElementById("openModalButton");

// Get the <span> element that closes the modal
var closeModalButton = document.getElementById("closeModalButton");

// When the user clicks on the button, open the modal
openModalButton.addEventListener("click", function() {
  const playerSrc = jQuery(this).attr('data-modal-src');
  var videoPlayer = document.getElementById("videoPlayer");
  videoPlayer.src = playerSrc; // Replace VIDEO_ID with your YouTube video ID
  modal.style.display = "block";
});

// When the user clicks on <span> (x), close the modal
closeModalButton.addEventListener("click", function() {
  var videoPlayer = document.getElementById("videoPlayer");
  videoPlayer.src = ""; // Stop the video
  modal.style.display = "none";
});

// When the user clicks anywhere outside of the modal, close it
window.addEventListener("click", function(event) {
  if (event.target == modal) {
    var videoPlayer = document.getElementById("videoPlayer");
    videoPlayer.src = ""; // Stop the video
    modal.style.display = "none";
  }
});

jQuery(function($){

  $(window).scroll(function(){
    var sticky = $('.sticky-header'),
    scroll = $(window).scrollTop();

    if (scroll >= 100) sticky.addClass('fixed-header');
    else sticky.removeClass('fixed-header');
  });

});

new WOW().init();
