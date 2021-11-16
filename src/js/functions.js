function navEvents() {
  var mediaqueryList = window.matchMedia("(max-width: 992px)");
  $("#navbarNav li, #navbarNav .boton")
    .not("#li-blog")
    .on("click", function () {
      $(".header .btn").attr("aria-expanded", "false");
      $(".navbar-collapse").removeClass("show");
      if (mediaqueryList.matches) {
        $("body").toggleClass("nav_open");
      }
    });

  if (mediaqueryList.matches) {
    $(".header .btn").on("click", function () {
      $("body").toggleClass("nav_open");
    });
  }
}

function anclasHome() {
  $("#navbarNav li, #navbarNav .boton")
    .not("#li-blog")
    .on("click", function () {
      var nameLi = $(this).attr("id").replace("li-", ""),
        nameSection = $("." + nameLi).offset().top;

      $("html, body").animate(
        { scrollTop: (nameSection = $("." + nameLi).offset().top - 190) },
        1500
      );

      return false;
    });
}

function efectoHeader() {
  $(document).scroll(function () {
    var posRow = $("html").offset().top;
    var scrolleo = $(window).scrollTop();

    if (scrolleo > posRow) {
      $(".header").addClass("nav-on");
    } else {
      $(".header").removeClass("nav-on ");
    }
  });
}

function efectoFade() {
  function sectionFade() {
    var sectionFade = $("section");
    sectionFade.each(function () {
      var mediaqueryList = window.matchMedia("(max-width: 992px)");
      if (mediaqueryList.matches) {
        var posSection = $(this).offset().top - 200;
        //console.log("mobile home")
      } else {
        var posSection = $(this).offset().top - 400;
        //console.log("d home");
      }

      //var posSection = $(this).offset().top - 300;
      var scrolleo = $(window).scrollTop();

      if (scrolleo > posSection) {
        $(this).find($(".objetFade")).addClass("transition1");
        $("section").removeClass("sectionOn");
        $(this).addClass("sectionOn");
      } else {
        $(this).find($(".objetFade")).removeClass("transition1");
      }

      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        $(".contact").find($(".objetFade")).addClass("transition1");
      } else {
        $(".contact").find($(".objetFade")).removeClass("transition1");
      }
    });
  }

  sectionFade();

  $(document).scroll(function () {
    sectionFade();
  });
}

$(function () {
  efectoHeader();
  navEvents();

  if ($("main").hasClass("home")) {
    anclasHome();
    efectoFade();
  }
});
