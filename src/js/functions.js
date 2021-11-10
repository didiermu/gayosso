function anclas() {
  $("#navbarNav li").on("click", function () {
    var nameLi = $(this).attr("id").replace("li-", ""),
      nameSection = $(".home--" + nameLi).offset().top;

    $("html, body").animate(
      { scrollTop: (nameSection = $(".home--" + nameLi).offset().top - 90) },
      1500
    );

    $(".header .btn").attr("aria-expanded", "false");
    $(".navbar-collapse").removeClass("show");

    return false;
  });
}

function scrolling() {
  $(document).scroll(function () {
    var posRow = $("html").offset().top;
    var scrolleo = $(window).scrollTop();

    if (scrolleo > posRow) {
      $(".header").addClass("nav-on ");
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
        var posSection = $(this).offset().top - 600;
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
  scrolling();
  efectoFade();

  if ($("main").hasClass("home")) {
    anclas();
  }
});
