$(document).ready(function(){
    // Go to top button
    $('.go-to-top').on('click', function() {
      $('html, body').animate({ scrollTop: 0 }, 'slow');
      return false;
    });
  });
  