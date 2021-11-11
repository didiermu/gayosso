swiperImage = () => {
  const swiper = new Swiper("#swiper_img", {
    direction: "horizontal",
    allowTouchMove: false,
    effect: "fade",
    slidesPerView: 1,
  });
};

swiperInfo = () => {
  const swiper = new Swiper("#swiper_img", {
    direction: "horizontal",
    allowTouchMove: false,
    effect: "fade",
    slidesPerView: 1,
  });

  const swiperContent = new Swiper("#swiper_content", {
    direction: "horizontal",
    allowTouchMove: false,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      type: "custom",
      clickable: true,
      renderCustom: function (swiperContent, currentClass, totalClass) {
        return (
          ("0" + currentClass).slice(-2) + " / " + ("0" + totalClass).slice(-2)
        );
      },
    },

    breakpoints: {
      320: {
        slidesPerView: "auto",
        allowTouchMove: true,
      },
      992: {
        slidesPerView: 2,
        slidesPerGroup: 2,
      },
    },
  });

  swiperContent.on("slideChange", function () {
    var mediaqueryList = window.matchMedia("(max-width: 992px)");
    // console.log(swiperContent.activeIndex);
    if (mediaqueryList.matches) {
      if (
        swiperContent.activeIndex == 8 ||
        swiperContent.activeIndex == 9 ||
        swiperContent.activeIndex == 16
      ) {
        $(".timeline").attr("class", "timeline tm1");
        $(".education .title_shadow").html(
          "My education <span>My education</span>"
        );
        swiper.slideTo(0);
      } else if (
        swiperContent.activeIndex == 10 ||
        swiperContent.activeIndex == 11
      ) {
        $(".timeline").attr("class", "timeline tm2");
        $(".education .title_shadow").html(
          "Certifications <span>My education</span>"
        );
        swiper.slideTo(1);
      } else if (
        swiperContent.activeIndex == 12 ||
        swiperContent.activeIndex == 13
      ) {
        $(".timeline").attr("class", "timeline tm1");
        $(".education .title_shadow").html("Courses <span>My education</span>");
        swiper.slideTo(2);
      } else if (
        swiperContent.activeIndex == 14 ||
        swiperContent.activeIndex == 15 ||
        swiperContent.activeIndex == 7
      ) {
        $(".timeline").attr("class", "timeline tm2");
        $(".education .title_shadow").html("Courses <span>My education</span>");
        swiper.slideTo(3);
      }
    } else {
      if (swiperContent.activeIndex == 2 || swiperContent.activeIndex == 10) {
        $(".timeline").attr("class", "timeline tm1");
        $(".education .title_shadow").html(
          "My education <span>My education</span>"
        );
        swiper.slideTo(0);
      } else if (swiperContent.activeIndex == 4) {
        $(".timeline").attr("class", "timeline tm2");
        $(".education .title_shadow").html(
          "Certifications <span>My education</span>"
        );
        swiper.slideTo(1);
      } else if (swiperContent.activeIndex == 6) {
        $(".timeline").attr("class", "timeline tm1");
        $(".education .title_shadow").html("Courses <span>My education</span>");
        swiper.slideTo(2);
      } else if (
        swiperContent.activeIndex == 8 ||
        swiperContent.activeIndex == 0
      ) {
        $(".timeline").attr("class", "timeline tm2");
        $(".education .title_shadow").html("Courses <span>My education</span>");
        swiper.slideTo(3);
      }
    }
  });
};

$(function () {
  // swiperImage();
  swiperInfo();
});
