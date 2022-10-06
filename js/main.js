$(document).ready(function () {
  $('.menu').click(() => {
    if ($('.menu').hasClass('on')) {
      $('.menu').removeClass('on');
      $('#rightsub').removeClass('active');
    } else {
      $('.menu').addClass('on');
      $('#rightsub').addClass('active');
    }
  });

  // top버튼
  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      $('#topBtn').fadeIn();
    }
    else { $('#topBtn').fadeOut(); }
  });
  $("#topBtn").click(function () {
    $('html, body').animate({ scrollTop: 0 }, 500);
    return false;
  });

  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      $('#t_topBtn').fadeIn();
    }
    else { $('#t_topBtn').fadeOut(); }
  });
  $("#t_topBtn").click(function () {
    $('html, body').animate({ scrollTop: 0 }, 400);
    return false;
  });
});