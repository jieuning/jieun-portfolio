$(document).ready(function () {


  // 높이값 설정
  $(".contact-wrap").css({height: $(window).innerHeight() - 120});

  // loop애니메이션을 위해 복사
  for (i = 0; i < 4; i++) {
    $(".skill-title-wrap").clone().appendTo(".skill-title-box");
    $(".project-title-wrap").clone().appendTo(".project-title-box");
  }


  // 메인 텍스트 초기 애니메이션 
  $(".main-title-wrap p .main-title").addClass("animate");
  $(".main-title-wrap .name .highlight").addClass("animate");


  // --------------- 스크롤 함수 ---------------

  let scrollAni = () => {

    // 실시간 스크롤 탑값
    let Scroll = $(window).scrollTop();
    console.log(Scroll)

    // ---------- 메인 텍스트 애니메이션 ----------

    let mainOffset = $("#main").offset().top;
    let aboutOffset = $("#about").offset().top;

    if (Scroll > mainOffset && Scroll < aboutOffset) {
      $(".main-title-wrap p .main-title").removeClass("animate");
      $(".main-title-wrap .name").addClass("active");
      $(".main-title-wrap .name").removeClass("back");
    }
    else if (Scroll <= mainOffset) {

      $(".main-title-wrap p .main-title").addClass("animate");
      $(".main-title-wrap .name").removeClass("active");
      $(".main-title-wrap .name").addClass("back");
    };

    // ---------- 어바웃 애니메이션 ----------

    let advanOffset = $(".advantages").offset().top;
    let advantages = $(".advantages ul > li");

    if (Scroll >= aboutOffset - 500) {
      $(".about-me").addClass("animate");
    }
    else {
      $(".about-me").removeClass("animate");
    };

    if (Scroll >= advanOffset - 400) {
      for (let i = 0; i < advantages.length; i++) {
        $(".advantages h4").addClass("animate");
        advantages.addClass("animate");
      };
    }
    else {
      for (let i = 0; i < advantages.length; i++) {
        $(".advantages h4").removeClass("animate");
        advantages.removeClass("animate");
      };
    }

    // ---------- 스킬 애니메이션 ----------

    let skillOffset = $("#skills").offset().top;
    let skills = $(".skill-contents li").length;

    for (let i = 0; i < skills; i++) {

      let skillsOffset = $(".skill-contents li").eq(i).offset().top;

      if (Scroll >= skillOffset - 300) {
        $(".skill-wrap h4").addClass("animate");
      }
      else {
        $(".skill-wrap h4").removeClass("animate");
      };

      if (Scroll >= skillsOffset - 600) {
        $(".skill-contents li").eq(i).addClass("animate");
      }
      else {
        $(".skill-contents li").eq(i).removeClass("animate");
      };
    };

    // ---------- 프로젝트 애니메이션 ----------

    let projects = $(".project-wrap");

    for (let i = 0; i < projects.length; i++) {
      let proOffset = $(".project-wrap").offset().top;

      // 스크롤 다운
      if (Scroll > proOffset - 600) {
        projects.addClass("animate");
      }
      else {
        projects.removeClass("animate")
      };
    }


    // ---------- 컨텍트 애니메이션 ----------

    let contactOffset = $("#contact").offset().top;

    if (Scroll > contactOffset - 120) {
      $(".contact-title").addClass("animate");
      $(".contact-wrap").addClass("animate");
      $("#contact").css({ "background": "#151515" });
      $("footer").css({ "background": "#151515", "opacity": 1 });
    } 
    else if (Scroll < contactOffset) {
      $(".contact-title").removeClass("animate");
      $(".contact-wrap").removeClass("animate");
      $("#contact").css({ "background": "#fff" });
      $("footer").css({ "background": "#fff", "opacity": 0 });
    }
  }

  // 스크롤 이벤트 호출
  $(window).on("scroll", scrollAni);
});