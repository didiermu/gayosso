$(function () {
  const swiper = new Swiper(".swiper", {
    // Optional parameters
    direction: "horizontal",
    allowTouchMove: false,
    effect: "fade",
    slidesPerView: 1,
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
      clickable: true,
    },
    renderFraction: function (currentClass, totalClass) {
      return (
        '<span class="' +
        currentClass +
        '"></span>' +
        " of " +
        '<span class="' +
        totalClass +
        '"></span>'
      );
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    on: {
      slideChange: function () {
        if (swiper.activeIndex == 0) {
          $(".timeline").attr("class", "timeline tm1");
          $(".title_shadow").html("My education <span>My education</span>");
        } else if (swiper.activeIndex == 1) {
          $(".timeline").attr("class", "timeline tm2");
          $(".title_shadow").html("Certifications <span>My education</span>");
        } else if (swiper.activeIndex == 2) {
          $(".timeline").attr("class", "timeline tm1");
          $(".title_shadow").html("Courses <span>My education</span>");
        } else if (swiper.activeIndex == 3) {
          $(".timeline").attr("class", "timeline tm2");
          $(".title_shadow").html("Courses <span>My education</span>");
        }
      },
    },
  });
});
