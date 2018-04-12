

$(document).ready(function() {

    var slideNow = 1;
    var slideCount = $('.slider__wrap').children().length;
    var slideInterval = 5000;
    var navBtnId = 0;
    var translateWidth = 0;
    var switchInterval = setInterval(nextSlide, slideInterval);

    $('.best').hover(function() {
        clearInterval(switchInterval);
    }, function() {
        switchInterval = setInterval(nextSlide, slideInterval);
    });

    $('.slider__arow_next').click(function() {
        nextSlide();
    });

    $('.slider__arow_prev').click(function() {
        prevSlide();
    });

    $('.slide-nav-btn').click(function() {
        navBtnId = $(this).index();

        if (navBtnId + 1 != slideNow) {
            translateWidth = -$('.slider__block').width() * (navBtnId);
            $('.slider__wrap').css({
                'transform': 'translate(' + translateWidth + 'px, 0)',
                '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
                '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
            });
            slideNow = navBtnId + 1;
        }
    });

    function nextSlide() {
      if (slideNow == slideCount || slideNow <= 0 || slideNow > slideCount) {
          $('.slider__wrap').css('transform', 'translate(0, 0)');
          slideNow = 1;
      } else {
          translateWidth = -$('.slider__block').width() * (slideNow);
          $('.slider__wrap').css({
              'transform': 'translate(' + translateWidth + 'px, 0)',
              '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
              '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
          });
          slideNow++;
      }
  }
  
  function prevSlide() {
      if (slideNow == 1 || slideNow <= 0 || slideNow > slideCount) {
          translateWidth = -$('.slider__block').width() * (slideCount - 1);
          $('.slider__wrap').css({
              'transform': 'translate(' + translateWidth + 'px, 0)',
              '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
              '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
          });
          slideNow = slideCount;
      } else {
          translateWidth = -$('.slider__block').width() * (slideNow - 2);
          $('.slider__wrap').css({
              'transform': 'translate(' + translateWidth + 'px, 0)',
              '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
              '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
          });
          slideNow--;
      }
  }

  $(".scroll").click( function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });

  $('.menu-open').click(function () {
    $('.menu-open__global_top').toggleClass('menu-open__global_top_open');
    $('.menu-open__global_middle').toggleClass('menu-open__global_middle_open');
    $('.menu-open__global_bottom').toggleClass('menu-open__global_bottom_open');
    $('.menu_navigation').toggleClass('menu_navigation_open');
    $('.black').slideToggle(200)
    $('.menu__items').slideToggle(200)
  });

  $('.menu__link').click(function(e) {
    $(this).siblings().slideToggle(200);
    $(this).find('.menu__svg').toggleClass('menu__svg_open');
    e.preventDefault();
  });

  $('.menu__link_dropdown').click(function () {
    $('.black').hide(200)
    $('.menu__items').hide(200)
    $('.menu-open__global_top').removeClass('menu-open__global_top_open');
    $('.menu-open__global_middle').removeClass('menu-open__global_middle_open');
    $('.menu-open__global_bottom').removeClass('menu-open__global_bottom_open');
    $('.menu_navigation').removeClass('menu_navigation_open');
  })
});


