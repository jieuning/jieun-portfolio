$(document).ready(function () {
  let menu = $(".category #menu li"),
      sections = $("#all-wrap > section");

  // 메뉴를 클릭했을 때 스크롤 이동
  menu.click(function () {

    let idx = $(this).index();
    let sectionIdx = sections.eq(idx);
    let sectionOffset = sectionIdx.offset().top;

    // 스크롤 이동
    $("html, body").stop().animate({ "scrollTop": sectionOffset });
  });

  // 스크롤 했을 때 해당 메뉴 활성화
  $(window).scroll(function() {
    sections.each(function() {
      if($(window).scrollTop() >= $(this).offset().top - 10) {

        let idx = $(this).index();

        menu.removeClass("on");
        menu.eq(idx).addClass("on");
      }
    });
  });
});