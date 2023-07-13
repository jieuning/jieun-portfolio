$(document).ready(function () {

  // loop애니메이션을 위해 복사
  for (i = 0; i < 6; i++) {
    $(".skill-title-wrap").clone().appendTo(".skill-title-box");
    $(".project-title-wrap").clone().appendTo(".project-title-box");
  }


  // 메인 렌더링 텍스트 애니메이션 
  $(".main-title-wrap p .main-title").animate({ "top": 0, "opacity": 1 }, 800, "swing");
  $(".main-title-wrap .name .highlight").delay(500).animate({ "top": 0, "opacity": 1 }, 800, "swing");



  // --------------- 스크롤 함수 ---------------

  let scrollAni = () => {

    // 실시간 스크롤 탑값
    let Scroll = $(window).scrollTop();
    console.log(Scroll)

    // section 타이틀 애니메이션
    $(".skill-title-box").stop().animate({ "right": (Scroll - 1000) * 0.1 }, 2000, "easeOutExpo");
    $(".project-title-box").stop().animate({ "right": -(Scroll - 5000) * 0.1 }, 2000, "easeOutExpo");

    // ---------- 메인 텍스트 애니메이션 ----------

    let mainOffset = $("#main").offset().top;
    let aboutOffset = $("#about").offset().top;

    if (Scroll > mainOffset && Scroll < aboutOffset) {
      $(".main-title-wrap p .main-title").stop().animate({ "top": "-130px", "opacity": 0 }, 500);
      $(".main-title-wrap .name").addClass("active");
      $(".main-title-wrap .name").removeClass("back");
    }
    else if (Scroll <= mainOffset) {
      $(".main-title-wrap p .main-title").stop().animate({ "top": 0, "opacity": 1 }, 500);
      $(".main-title-wrap .name").removeClass("active");
      $(".main-title-wrap .name").addClass("back");
    };

    // ---------- 어바웃 애니메이션 ----------

    let advanOffset = $(".advantages").offset().top;
    let advantages = $(".advantages ul > li");

    if (Scroll >= aboutOffset - 400) {
      $(".about-me").stop().animate({ "top": 0, "opacity": 1 }, 500, "easeOutQuad");
    }
    else {
      $(".about-me").stop().animate({ "top": "100px", "opacity": 0 }, 500, "easeOutQuad");
    };

    if (Scroll >= advanOffset - 400) {
      for (let i = 0; i < advantages.length; i++) {
        $(".advantages h4").stop().animate({ "top": 0, "opacity": 1 }, 500, "easeOutQuad");
        advantages.stop().delay(i * 50).eq(i).animate({ "top": 0, "opacity": 1 }, 500, "easeOutBack");
      };
    }
    else {
      for (let i = 0; i < advantages.length; i++) {
        $(".advantages h4").stop().animate({ "top": "100px", "opacity": 0 }, 500, "easeOutQuad");
        advantages.stop().delay(i * 50).eq(i).animate({ "top": "100px", "opacity": 0 }, 500, "easeOutBack");
      };
    }

    // ---------- 스킬 애니메이션 ----------

    let skillOffset = $("#skills").offset().top;
    let skills = $(".skill-contents li").length;

    for (let i = 0; i < skills; i++) {

      let skillsOffset = $(".skill-contents li").eq(i).offset().top;

      if (Scroll >= skillOffset - 300) {
        $(".skill-wrap h4").stop().animate({ "top": 0, "opacity": 1 }, 500, "easeOutQuad");
      }
      else {
        $(".skill-wrap h4").stop().animate({ "top": "100px", "opacity": 0 }, 500, "easeOutQuad");
      };

      if (Scroll >= skillsOffset - 600) {
        $(".skill-contents li").eq(i).stop().animate({ "top": 0, "opacity": 1 }, 500, "easeOutBack");
      }
      else {
        $(".skill-contents li").eq(i).stop().animate({ "top": "100px", "opacity": 0 }, 500, "easeOutBack");
      };
    };

    // ---------- 프로젝트 애니메이션 ----------

    let projects = $(".project-wrap");

    for (let i = 0; i < projects.length; i++) {
      let proOffset = $(".project-wrap").offset().top;

      // 스크롤 다운
      if (Scroll > proOffset - 600) {
        projects.stop().animate({ "top": 0, "opacity": 1 }, 500, "swing");
      }
      else {
        projects.stop().animate({ "top": "100px", "opacity": 0 }, 500, "swing");
      };
    }


    // ---------- 컨텍트 애니메이션 ----------

    let contactOffset = $("#contact").offset().top;

    if (Scroll >= contactOffset - 100) {
      $(".contact-title").addClass("active");
      $("#contact").css({ "background": "#151515" });
      $("footer").css({ "background": "#151515", "opacity": 1 });
      $(".con-logo").css({ "display": "block" });
      $(".other").css({ "opacity": 1 });
      $(".mail").css({ "opacity": 1 });

    }

    else if (Scroll < contactOffset) {
      $(".contact-title").removeClass("active");
      $("#contact").css({ "background": "#fff" });
      $("footer").css({ "background": "#fff", "opacity": 0 });
      $(".con-logo").css({ "display": "none" });
      $(".other").css({ "opacity": 0 });
      $(".mail").css({ "opacity": 0 });
    }
  }

  // 스크롤 이벤트 호출
  $(window).on("scroll", scrollAni);
});