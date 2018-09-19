function scrollNav() {
    $('.arrowBottom').click(function(){  
      //Animate
      $('html, body').stop().animate({
          scrollTop: $( $(this).attr('href') ).offset().top - 72
      }, 500);
      return false;
    });
    $('.arrowBottom').scrollTop();
  }
  scrollNav();