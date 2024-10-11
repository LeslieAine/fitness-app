// ------------------------------------------------
// Project Name: Emeric - Coming Soon and Portfolio Template
// Project Description: Emeric - clean and functional coming soon and portfolio template to kick-start your project
// Tags: mix_design, coming soon, under construction, template, landing page, portfolio, one page, responsive, html5, css3, creative, clean, agency, personal page
// Version: 1.0.1
// Build Date: September 2023
// Last Update: January 2024
// This product is available exclusively on Themeforest
// Author: mix_design
// Author URI: https://themeforest.net/user/mix_design
// File name: custom.js
// ------------------------------------------------

// ------------------------------------------------
// Table of Contents
// ------------------------------------------------
//
//  1. Loader & Loading Animation
//  2. Swiper Slider
//  3. Skillbars
//  4. Magnific Popup Video
//  5. KBW-Countdown
//  6. Vegas Kenburns
//  7. Mailchimp Notify Form
//  8. Contact Form
//
// ------------------------------------------------
// Table of Contents End
// ------------------------------------------------

$(window).on("load", function () {

  "use strict";

  // --------------------------------------------- //
  // Loader & Loading Animation Start
  // --------------------------------------------- //
  $(".loader__logo").addClass('scaleOut');

  setTimeout(function () {
    $(".loader").addClass('loaded');
    $("#main").addClass('active animate-in');
    $('#home-trigger').addClass('active-link');
  }, 300);

  setTimeout(function () {
    $("body").addClass('loaded');
  }, 950);

  // --------------------------------------------- //
  // Loader & Loading Animation End
  // --------------------------------------------- //

});

$(function () {

  "use strict";

  function handleLoader() {
    const loader = document.getElementById("loader11");
    const mainContent = document.getElementById("main-content11");

    if (loader && mainContent) {
        loader.style.display = "block";
        mainContent.style.display = "none";

        function displayContent() {
            loader.style.display = "none";
            mainContent.style.display = "block";
        }

        if (document.readyState === "complete") {
            // If the page is already loaded, use a timeout to briefly show the loader
            setTimeout(displayContent, 1000); 
        } else {
            // If the page is still loading, use the window onload event
            window.onload = displayContent;
        }
    } else {
        console.error("Oops, wrong url! Try adding /coach/{trainerName} to your url e.g. your example.com/coach/{trainerName}");
    }
}

handleLoader();


  // --------------------------------------------- //
  // Swiper Slider Start
  // --------------------------------------------- //
  var mySwiper = new Swiper ('.swiper-container', {
    // Optional parameters
    loop: true,
    slidesPerView: 1,
  
    preloadImages: true,
    updateOnImagesReady: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  })

  var swiper = new Swiper('.swiper', {
    // Optional parameters
    grabCursor: true,
    preloadImages: true,
    updateOnImagesReady: true,
    slidesPerView: 1,
    effect: "creative",
    creativeEffect: {
      prev: {
        translate: ["-20%", 0, -1],
      },
      next: {
        translate: ["100%", 0, 0],
      },
    },
    parallax: true,
    speed: 1300,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

  });

  // --------------------------------------------- //
  // Swiper Slider End
  // --------------------------------------------- //
  $(function () {
    const aboutBtn = document.querySelector('.aboutbtn');
  if (aboutBtn) {
    aboutBtn.addEventListener('click', function (e) {
      e.preventDefault();
      const targetElement = document.getElementById('aboutsection');
      const offsetPosition = targetElement.getBoundingClientRect().top + window.scrollY - 100;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  });
}
    });
  $(function() {
    const homeBtn = document.querySelector('.homebtn');
  if (homeBtn) {
    homeBtn.addEventListener('click', function (e) {
      e.preventDefault();
      const targetElement = document.getElementById('main');
    const offsetPosition = targetElement.offsetTop - 100;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  });
}
});

  $(function() {
    const worksBtn = document.querySelector('.worksbtn');
  if (worksBtn) {
    worksBtn.addEventListener('click', function (e) {
      e.preventDefault();
      const targetElement = document.getElementById('worksection');
      const offsetPosition = targetElement.getBoundingClientRect().top + window.scrollY - 100;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  });
}
    });
  $(function() {
    const contactBtn = document.querySelector('.contactbtn');
  if (contactBtn) {
    contactBtn.addEventListener('click', function (e) {
      e.preventDefault();
      const targetElement = document.getElementById('contactsection');
      const offsetPosition = targetElement.getBoundingClientRect().top + window.scrollY - 100;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  });
}
    });
  

  // --------------------------------------------- //
  // Skillbars Settings Start
  // --------------------------------------------- //
  $('.skillbar').skillBars({
    from: 0,
    speed: 4000,
    interval: 100,
  });
  // --------------------------------------------- //
  // Skillbars Settings End
  // --------------------------------------------- //

  // --------------------------------------------- //
  // Magnific Popup Video Start
  // --------------------------------------------- //
  $('#inner-video-trigger').magnificPopup({
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false,
    callbacks: {
      beforeOpen: function () { $('body').addClass('overflow-hidden'); },
      close: function () { $('body').removeClass('overflow-hidden'); }
    }
  });

  $('#showreel-trigger').magnificPopup({
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false,
    callbacks: {
      beforeOpen: function () { $('body').addClass('overflow-hidden'); },
      close: function () { $('body').removeClass('overflow-hidden'); }
    }
  });
  // --------------------------------------------- //
  // Magnific Popup Video End
  // --------------------------------------------- //

  // --------------------------------------------- //
  // KBW-Countdown Start
  // --------------------------------------------- //
  $('#countdown').countdown({ until: $.countdown.UTCDate(+10, 2024, 5, 27), format: 'D' });
  $('#countdownLine').countdown({ until: $.countdown.UTCDate(+10, 2024, 5, 27), format: 'D' });
  // --------------------------------------------- //
  // KBW-Countdown End
  // --------------------------------------------- //


  document.addEventListener("DOMContentLoaded", function () {
    const blocksScroll = document.querySelector(".blocks__scroll");
    const showMore = document.getElementById("show-more");

    blocksScroll.addEventListener("scroll", function () {
      showMore.style.display = "none";
    });
  });


  // --------------------------------------------- //
  // Vegas Kenburns Start
  // --------------------------------------------- //

  // --------------------------------------------- //
  // Vegas Kenburns End
  // --------------------------------------------- //

  // --------------------------------------------- //
  // Mailchimp Notify Form Start
  // --------------------------------------------- //
  $('.notify-form').ajaxChimp({
    callback: mailchimpCallback,
    url: 'https://besaba.us10.list-manage.com/subscribe/post?u=e8d650c0df90e716c22ae4778&amp;id=54a7906900'
  });

  function mailchimpCallback(resp) {
    if (resp.result === 'success') {
      $('.notify').find('.form').addClass('is-hidden');
      $('.notify').find('.subscription-ok').addClass('is-visible');
      setTimeout(function () {
        // Done Functions
        $('.notify').find('.subscription-ok').removeClass('is-visible');
        $('.notify').find('.form').delay(300).removeClass('is-hidden');
        $('.notify-form').trigger("reset");
      }, 5000);
    } else if (resp.result === 'error') {
      $('.notify').find('.form').addClass('is-hidden');
      $('.notify').find('.subscription-error').addClass('is-visible');
      setTimeout(function () {
        // Done Functions
        $('.notify').find('.subscription-error').removeClass('is-visible');
        $('.notify').find('.form').delay(300).removeClass('is-hidden');
        $('.notify-form').trigger("reset");
      }, 5000);
    }
  };
  // --------------------------------------------- //
  // Mailchimp Notify Form End
  // --------------------------------------------- //

  // --------------------------------------------- //
  // Contact Form Start
  // --------------------------------------------- //
  $("#contact-form").submit(function () { //Change
    var th = $(this);
    $.ajax({
      type: "POST",
      url: "mail.php", //Change
      data: th.serialize()
    }).done(function () {
      $('.contact').find('.form').addClass('is-hidden');
      $('.contact').find('.reply-group').addClass('is-visible');
      setTimeout(function () {
        // Done Functions
        $('.contact').find('.reply-group').removeClass('is-visible');
        $('.contact').find('.form').delay(300).removeClass('is-hidden');
        th.trigger("reset");
      }, 5000);
    });
    return false;
  });
  // --------------------------------------------- //
  // Contact Form End
  // --------------------------------------------- //

});