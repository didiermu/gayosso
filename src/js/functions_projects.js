function efectoFadeProjects() {
  function sectionFadeProjects() {
    var sectionFade = $(".content__03");
    sectionFade.each(function () {
      var mediaqueryList = window.matchMedia("(max-width: 992px)");
      if (mediaqueryList.matches) {
        var posSection = $(this).offset().top - 200;
        //console.log("mobile home")
      } else {
        var posSection = $(this).offset().top - 400;
        //console.log("d home");
      }

      var scrolleo = $(window).scrollTop();
      if (mediaqueryList.matches) {
        if (scrolleo < 450) {
          $(".content--nav ").removeClass("nav_on");
        } else {
          $(".content--nav ").addClass("nav_on");
        }
      }

      if (scrolleo > posSection) {
        $(".content__03").removeClass("sectionOn");
        $(this).addClass("sectionOn");
      }
    });
  }

  sectionFadeProjects();

  $(document).scroll(function () {
    sectionFadeProjects();

    const swiperNav = new Swiper("#swiper_nav", {
      slidesPerView: "auto",

      breakpoints: {
        320: {
          direction: "horizontal",
          allowTouchMove: true,
        },
        992: {
          direction: "vertical",
          allowTouchMove: false,
        },
      },
    });

    if ($("#cero").hasClass("sectionOn")) {
      swiperNav.slideTo(0);
      $(".content--nav h5").removeClass("nav_on");
      $("#li-cero").addClass("nav_on");
    } else if ($("#uno").hasClass("sectionOn")) {
      swiperNav.slideTo(1);
      $(".content--nav h5").removeClass("nav_on");
      $("#li-uno").addClass("nav_on");
    } else if ($("#dos").hasClass("sectionOn")) {
      swiperNav.slideTo(2);
      $(".content--nav h5").removeClass("nav_on");
      $("#li-dos").addClass("nav_on");
    } else if ($("#tres").hasClass("sectionOn")) {
      swiperNav.slideTo(3);
      $(".content--nav h5").removeClass("nav_on");
      $("#li-tres").addClass("nav_on");
    } else if ($("#cuatro").hasClass("sectionOn")) {
      swiperNav.slideTo(4);
      $(".content--nav h5").removeClass("nav_on");
      $("#li-cuatro").addClass("nav_on");
    } else if ($("#cinco").hasClass("sectionOn")) {
      swiperNav.slideTo(4);
      $(".content--nav h5").removeClass("nav_on");
      $("#li-cinco").addClass("nav_on");
    }

    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      $(".contact").find($(".objetFade")).addClass("transition1");
    } else {
      $(".contact").find($(".objetFade")).removeClass("transition1");
    }
  });
}

function anclasProject() {
  $(".content--nav h5").on("click", function () {
    var nameLi = $(this).attr("id").replace("li-", ""),
      nameSection = $("#" + nameLi).offset().top;

    $("html, body").animate(
      { scrollTop: (nameSection = $("#" + nameLi).offset().top - 190) },
      1500
    );
  });
}

$(function () {
  if ($("main").hasClass("projects")) {
    efectoFadeProjects();
    anclasProject();
  }
});
