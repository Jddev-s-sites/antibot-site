$(document).ready(function() {
    $(".scroll-button").click(function() {
      $('html, body').animate({
        scrollTop: $("#section2").offset().top
      }, 1000);
    });
  });