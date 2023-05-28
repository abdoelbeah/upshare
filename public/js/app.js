document.addEventListener("DOMContentLoaded", function() {
  const swiper1 = new Swiper(".swiper-photocards", {
    // Optional parameters
    direction: "horizontal",
    slidesPerView: 1,
    spaceBetween: 0,
  
    autoplay: {
      delay: 10000,
      disableOnInteraction: false,
    },
  
    breakpoints: {
  
      550: {
        slidesPerView: 2,
        spaceBetween: 0,
      },
  
  
      1024: {
        slidesPerView: 3,
        spaceBetween: 0,
      },
      1350: {
        slidesPerView: 4,
        spaceBetween: 0,
      },
    },
  });})
  document.addEventListener("DOMContentLoaded", function() {
  const swiper2 = new Swiper(".swiper-brands", {
    // Optional parameters
    direction: "horizontal",
    slidesPerView: 4,
    spaceBetween: 0,
  
    autoplay: {
      delay: 10000,
      disableOnInteraction: false,
    },
  
    breakpoints: {
  
      550: {
        slidesPerView: 6,
        spaceBetween: 0,
      },
  
  
      1024: {
        slidesPerView: 8,
        spaceBetween: 0,
      },
      1350: {
        slidesPerView: 11,
        spaceBetween: 0,
      },
    },
  });})
  $(document).ready(function() {
    // Get the current URL
    var currentUrl = window.location.href;
  
    // Find the nav link element that matches the current URL
    var navLink = $('.nav-item a').filter(function() {
      return this.href === currentUrl;
    });
  
    // Remove the active class from all nav links
    $('.nav-item a').removeClass('active');
  
    // Add the active class to the nav link element that matches the current URL
    navLink.addClass('active');
  });
  $(document).ready(function() {
    let currentPath = window.location.pathname;
    if (!['/contact.html', '/index.html'].some(path => currentPath.endsWith(path))) { // Check if the current page is not the home page or the contact page
    $('.home_nav').addClass('navbar-scrolled');
    $('.changesrc').attr('src', '../img/Group 151.png'); // Change the image source to 'new-image.jpg'
    $('.log').removeClass('text_primary');
    $('footer').addClass('section-colors_primary ')
    $('footer a').addClass('text_third ')
    }else{
      $('footer').addClass('bg_primary')
      $('footer a').addClass('text_primary ')
    }
    });
    $(document).ready(function() {
      // Get the active nav link element
      var activeNavLink = $('.nav-item .active');
      
      // Append the .triangle-top class to the active nav link element
      activeNavLink.append('<span class="triangle-top position-absolute d-none d-lg-block" style="top:30px; right:45% " ></span>');
    });
    $(document).ready(function() {
      let currentPath = window.location.pathname;
      if (['/contact.html', '/index.html'].some(path => currentPath.endsWith(path))) {
      $(window).scroll(function() {
      let scrollDistance = $(window).scrollTop();
      // Show/hide menu on scroll
      if (scrollDistance >= 500) {
        $('.home_nav').addClass('navbar-scrolled');
        $('.changesrc').attr('src', '../img/Group 151.png'); // Change the image source to 'new-image.jpg'
        $('.log').removeClass('text_primary');
        } else {
        $('.home_nav').removeClass('navbar-scrolled');
        $('.changesrc').attr('src', '../img/Group 11.png'); // Change the image source back to 'original-image.jpg'
        $('.log').addClass('text_primary');
      }
      });
      }
      });

      





// const check1 = document.getElementById('check1');
// const option11 = document.getElementById('option11');
// const check2 = document.getElementById('check2');
// const option12 = document.getElementById('option12');

// option11.addEventListener('click', () => {
//   if (check1  && check2 ) {
//     check1.classList.add('activecheckbox');
//     check2.classList.remove('activecheckbox');
//   }
// });

// option12.addEventListener('click', () => {
//   if (check1 && check2 ) {
//     check2.classList.add('activecheckbox');
//     check1.classList.remove('activecheckbox');
//   }
// });














