$(document).ready(function () {
  
    // 버튼 클릭시 scrollTop 0으로 이동
    $(".top-btn").click(function(e) {
      e.preventDefault();
      $("html, body").stop().animate({scrollTop: 0}, 800);
    });
  });