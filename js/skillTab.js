$(document).ready(function () {

  let skillBtn = $(".skills-btn li");
  let skillContent = $(".skill");

  skillBtn.click(function () {

    let idx = $(this).index();

    // 버튼 탭 기능
    skillBtn.removeClass("on");
    skillBtn.eq(idx).addClass("on");

    // 버튼 클릭시 해당 내용 보이기
    skillContent.hide();
    skillContent.eq(idx).show();
  });
});