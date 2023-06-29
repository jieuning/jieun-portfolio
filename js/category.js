$(document).ready(function () {
  $(".cate-btn").click(function() {
    // 카테고리 열림/닫힘
    $(".category").toggleClass("open");

    // 카테고리 라인 close버튼 애니메이션
    $(".cate-btn span").toggleClass("toggle");
    $(".cate-btn span").toggleClass("toggle2");

    // 카테고리 메뉴 등장 애니메이션
    let menus = $("#menu li").length;
    let cateLength = $(".category.open").length

    // .category.open 추가일때, .category.open이 제거되었을때
    for (let i = 0; i < menus; i++) {
      if (cateLength == 1) {
        $("#menu li").eq(i).delay(i * 200).animate({ "left": 0, "opacity": 1 }, 1000, "easeOutBack");
      }
      else {
        $("#menu li").eq(i).delay(i * 200).animate({ "left": "100px", "opacity": 0 }, 1000, "easeOutBack");
      }
    };
  });
});