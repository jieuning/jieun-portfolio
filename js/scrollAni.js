$(document).ready(function () {

  // loop애니메이션을 위해 복사
  for (i = 0; i < 6; i++) {
    $(".skill-title-wrap").clone().appendTo(".skill-title-box");
    $(".project-title-wrap").clone().appendTo(".project-title-box");
  }

  let projects = $(".contents-wrap ul").length; // 프로젝트 수

  let scrollAni = () => {

    // 실시간 스크롤 탑값
    let Scroll = $(window).scrollTop();
    console.log(Scroll)

    // section 타이틀 애니메이션
    $(".skill-title-box").stop().animate({ "right": (Scroll - 1000) * 0.1 }, 2000, "easeOutExpo");
    $(".project-title-box").stop().animate({ "right": -(Scroll - 5000) * 0.1 }, 2000, "easeOutExpo");

    // ---------- 메인 텍스트 애니메이션 ----------

    let mainOffset = $("#main").offset().top;
    let mainHeight = $("#main").height();

    // 스크롤 다운
    if (Scroll >= mainOffset && Scroll <= mainHeight) {
      $(".bg-wrap img").stop().animate({ "right": Scroll * 0.05 }, 1000, "easeOutExpo");
    }
    // 스크롤 업
    else {
      $(".bg-wrap img").stop().animate({ "right": -(Scroll * 0.05) }, 1000, "easeOutExpo");
    }


    // ---------- 어바웃 애니메이션 ----------

    let aboutOffset = $("#about").offset().top;
    let aboutHeigt = $("#about").height();

    if (Scroll >= aboutOffset - 400) {
      $(".about-me").stop().animate({ "top": 0, "opacity": 1 }, 500, "easeOutQuad");
    }
    else {
      $(".about-me").stop().animate({ "top": "100px", "opacity": 0 }, 500, "easeOutQuad");
    };

    // 스크롤 업
    // 스크롤 업시 offset에서 height값을 빼야 탑값
    else if (Scroll <= aboutOffset - aboutHeigt) {
      // 이미지 애니메이션
      $(".profile img").removeClass("active");
      // 텍스트 애니메이션
      $(".profile-info").removeClass("active");
      $(".about-title").removeClass("active");
      $(".about-me li p").removeClass("active");
      $(".about-me li .about-content").removeClass("active");
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

      // 스크롤 업
      else if (Scroll <= proOffset - height) {
        // 컨텐츠 애니메이션
        $(".number").eq(i).removeClass("active");
        $(".pro-name").eq(i).removeClass("active");
        $(".pro-skill").eq(i).removeClass("active");
        $(".description").eq(i).removeClass("active");
        $(".technique").eq(i).removeClass("active");
        $(".view-btn").eq(i).removeClass("active");

        // 이미지 애니메이션
        $(".img-wrap img").eq(i).removeClass("active");
        $(".img-wrap img").eq(i).addClass("active2");
      }
    }


    // ---------- 컨텍트 애니메이션 ----------

    let contactOffset = $("#contact").offset().top;

    if (Scroll >= contactOffset) {
      $(".cate-btn span").addClass("bg");
      $(".section-title").addClass("active");
      $("#contact").css({ "background": "#111111" });
      $(".logo").css({ "display": "none" });
      $(".con-logo").css({ "display": "block" });
      $(".other").css({ "opacity": 1 });
      $(".mail").css({ "opacity": 1 });

    }

    else if (Scroll < contactOffset) {
      $(".cate-btn span").removeClass("bg");
      $(".section-title").removeClass("active");
      $("#contact").css({ "background": "#fff" });
      $(".logo").css({ "display": "block" });
      $(".con-logo").css({ "display": "none" });
      $(".other").css({ "opacity": 0 });
      $(".mail").css({ "opacity": 0 });
    }
  }

  // 스크롤 이벤트 호출
  $(window).on("scroll", scrollAni);
});