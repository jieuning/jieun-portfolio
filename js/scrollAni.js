$(document).ready(function () {

  // loop애니메이션을 위해 복사
  for (i = 0; i < 4; i++) {
    $(".skill-title-wrap").clone().appendTo(".skill-title-box");
    $(".project-title-wrap").clone().appendTo(".project-title-box");
  }

  let projects = $(".contents-wrap ul").length; // 프로젝트 수

  let scrollAni = () => {

    // 실시간 스크롤 탑값
    let Scroll = $(window).scrollTop();


    // ---------- 메인 이미지 스크롤 애니메이션 ----------

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

    // 스크롤 다운
    if (Scroll >= aboutOffset - 200) {
      // 이미지 애니메이션
      $(".profile img").addClass("active");
      // 텍스트 애니메이션
      $(".profile-info").addClass("active");
      $(".about-title").addClass("active");
      $(".about-me li .about-content").addClass("active");
    }

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


    // ---------- 프로젝트 애니메이션 ----------

    for (let i = 0; i < projects; i++) {
      let proOffset = $(".contents-wrap ul").eq(i).offset().top;
      let height = $(".contents-wrap ul").height();

      // 스크롤 다운
      if (Scroll > proOffset - 300) {
        // 컨텐츠 애니메이션
        $(".number").eq(i).addClass("active");
        $(".pro-name").eq(i).addClass("active");
        $(".pro-skill").eq(i).addClass("active");
        $(".description").eq(i).addClass("active");
        $(".technique").eq(i).addClass("active");
        $(".view-btn").eq(i).addClass("active");

        // 이미지 애니메이션
        $(".img-wrap img").eq(i).addClass("active");
        $(".img-wrap img").eq(i).removeClass("active2");
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


    // ---------- 콘텍트 애니메이션 ----------

    let contactOffset = $("#contact").offset().top;

    if (Scroll >= contactOffset) {
      $(".cate-btn span").addClass("bg");
      $(".section-title").addClass("active");
      $("#contact").css({ "background": "#111111" });
      $(".logo").css({ "display": "none" });
      $(".con-logo").css({ "display": "block" });
      $(".mail").css({ "transform": "translateY(0)", "opacity": 1 });

    }

    else if (Scroll < contactOffset) {
      $(".cate-btn span").removeClass("bg");
      $(".section-title").removeClass("active");
      $("#contact").css({ "background": "#fff" });
      $(".logo").css({ "display": "block" });
      $(".con-logo").css({ "display": "none" });
      $(".mail").css({ "transform": "translateY(200px)", "opacity": 0 });
    }
  }

  // 스크롤 이벤트 호출
  $(window).on("scroll", scrollAni);
});