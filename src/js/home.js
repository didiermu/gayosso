import Swiper from "swiper";
import "swiper/css";

const mediaQueryPortrait = window.matchMedia("(max-width: 1279px)");

// SVG

function drawSvgHero() {
   function pathPrepare($el) {
      var lineLength = $el[0].getTotalLength();
      $el.css("stroke-dasharray", lineLength);
      $el.css("stroke-dashoffset", lineLength);
   }

   var $pathHero = $("#pathNuestros");

   // prepare SVG

   pathPrepare($pathHero);

   // init controller
   var controller = new ScrollMagic.Controller();

   // build tween

   var tween = new TimelineMax()
      .add(
         TweenMax.to($pathHero, 1, {
            strokeDashoffset: 0,
            ease: "sine.in",
            delay: 1,
         })
      )
      .add(TweenMax.to("path", 0, { ease: "sine.in" }), 0);

   var scene = new ScrollMagic.Scene({
      triggerElement: "#about",
      duration: 100,
      tweenChanges: true,
      triggerHook: "onEnter",

      // triggerHook: 0.65,
   })
      .setTween(tween)
      .addTo(controller);
}

drawSvgHero();

const animacionPortafolio = () => {
   gsap.fromTo(
      ".portafolio--title--uno",
      {
         xPercent: -40,
         opacity: 0,
      },
      {
         xPercent: 0,
         opacity: 1,
         duration: 1,
         ease: "ease",
         delay: 0,
         scrollTrigger: {
            trigger: ".portafolio",
            start: "-=200 center",
            end: "top center",
            toggleActions: "restart pause reverse pause",
            scrub: 2,
            // markers: true,
         },
      }
   );

   gsap.fromTo(
      ".portafolio--title svg path",
      {
         scaleX: 0,
      },
      {
         scaleX: 1,
         scrollTrigger: {
            trigger: ".portafolio",
            start: "+=100 center",
            end: "=350 center",
            ease: "ease",
            scrub: 1,
            toggleActions: "restart pause reverse pause",
            // markers: true,
         },
      }
   );
};

animacionPortafolio();

const animacionConnect = () => {
   gsap.fromTo(
      ".contact--title--dos",
      {
         xPercent: -40,
         opacity: 0,
      },
      {
         xPercent: 0,
         opacity: 1,
         duration: 1,
         ease: "ease",
         delay: 0,
         scrollTrigger: {
            trigger: ".contact",
            start: "-=200 center",
            end: "top center",
            toggleActions: "restart pause reverse pause",
            scrub: 2,
            // markers: true,
         },
      }
   );

   gsap.fromTo(
      ".contact--title svg path",
      {
         scaleX: 0,
      },
      {
         scaleX: 1,
         duration: 2,
         scrollTrigger: {
            trigger: ".contact",
            start: "+=200 center",
            end: "=450 center",
            ease: "ease",
            scrub: 1,
            toggleActions: "restart pause reverse pause",
            // markers: true,
         },
      }
   );
};

animacionConnect();

function drawSvgContacto() {
   function pathPrepare($el) {
      var lineLength = $el[0].getTotalLength();
      $el.css("stroke-dasharray", lineLength);
      $el.css("stroke-dashoffset", lineLength);
   }

   var $pathConect = $("#pathConect");

   // prepare SVG

   pathPrepare($pathConect);

   // init controller
   var controller = new ScrollMagic.Controller();

   // build tween

   var tweenContacto = new TimelineMax()
      .add(
         TweenMax.to($pathConect, 1, {
            strokeDashoffset: 0,
            ease: "sine.in",
            delay: 1,
         })
      )
      .add(TweenMax.to("path", 0, { ease: "sine.in" }), 0);

   var scene3 = new ScrollMagic.Scene({
      triggerElement: "#contact",
      duration: 100,
      tweenChanges: true,
      triggerHook: "onCenter",
   })
      .setTween(tweenContacto)
      .addTo(controller);
}

const revealLoad = (el, movimiento, delay = 0) => {
   gsap.fromTo(
      el,
      {
         xPercent: movimiento,
         opacity: 0,
      },
      {
         xPercent: 0,
         opacity: 1,
         duration: 1.5,
         delay: delay,
         ease: "ease",
      }
   );
};

const revealLoadY = (el, movimiento, delay = 0) => {
   gsap.fromTo(
      el,
      {
         yPercent: movimiento,
         opacity: 0,
      },
      {
         yPercent: 0,
         opacity: 1,
         duration: 0.8,
         delay: delay,
         ease: "ease",
      }
   );
};

const animacionX = (el, trigger, movimiento, callback) => {
   gsap.fromTo(
      el,
      {
         xPercent: movimiento,
         opacity: 0,
      },
      {
         xPercent: 0,
         opacity: 1,
         duration: 1.5,
         ease: "ease",
         delay: 0,
         scrollTrigger: {
            trigger: trigger,
            start: "-=200 center",
            end: "top center",
            scrub: 5,
            toggleActions: "restart pause reverse pause",
            // markers: true,
         },
         onComplete: function () {
            callback;
         },
      }
   );
};

const animacionYSlow = (el, trigger, movimiento = 40, delay = 0) => {
   var sections = gsap.utils.toArray(el);
   sections.forEach((section) => {
      gsap.fromTo(
         el,
         {
            yPercent: movimiento,
            opacity: 0,
         },
         {
            yPercent: 0,
            opacity: 1,
            duration: 0.5,
            ease: "ease",
            delay: delay,
            scrollTrigger: {
               trigger: trigger,
               start: "-=400 center",
               end: "top center",
               scrub: 5,
               toggleActions: "restart pause reverse pause",
            },
         }
      );
   });
};

const animacionYFast = (el, trigger, movimiento = 40) => {
   var sections = gsap.utils.toArray(el);
   sections.forEach((section) => {
      gsap.fromTo(
         el,
         {
            yPercent: movimiento,
            opacity: 0,
         },
         {
            yPercent: 0,
            opacity: 1,
            duration: 0.1,
            ease: "ease",
            scrollTrigger: {
               trigger: trigger,
               start: "-=400 center",
               end: "top center",
               scrub: 2.5,
               toggleActions: "restart pause reverse pause",
            },
         }
      );
   });
};

const animacionEach = () => {
   const boxes = gsap.utils.toArray(".portafolio--contenedor a");
   boxes.forEach((box) => {
      gsap.fromTo(
         box,
         {
            y: 60,
            opacity: 0,
         },
         {
            y: 0,
            opacity: 1,
            scrollTrigger: {
               trigger: box,
               start: "-=400 center",
               end: "top center",
               scrub: 5,
               toggleActions: "restart pause reverse pause",
            },
         }
      );
   });
};

animacionEach();

revealLoad(".hero--title--uno", 40);
revealLoad(".hero--title--dos", -40, 1);

// animacionX(".portafolio--title--uno", ".portafolio", -40, drawSvgPortafolio());
animacionX(".portafolio--title--dos", ".portafolio", 40);
animacionYSlow(".portafolio #title-mobile", ".portafolio", 60);

animacionX(".worked h2", ".worked", -40);

animacionX(".worked--logos img", ".worked", 240);

animacionYSlow(".videos .videos--grid__contenedor", ".videos", 60);

animacionX(".contact--title--uno", ".contact", 40);
animacionX(".contact__link", ".contact", -40);

animacionX(".contact #title-mobile", ".contact", 40);

if (mediaQueryPortrait.matches) {
   revealLoadY(".hero--text", 40);
   revealLoadY(".resume img", 40, 0.7);
   revealLoadY(".resume--text", -40, 0.8);
   animacionYFast(".contact--img", ".contact", 40);
} else {
   animacionYFast(".resume img", ".resume", 60);
   animacionYSlow(".resume--text", ".resume");
}

// HEADER

const anclas = () => {
   const linkMenu = document.querySelectorAll(".header--one li");
   for (const linkMenuEl of linkMenu) {
      linkMenuEl.addEventListener("click", () => {
         let idLink = linkMenuEl.getAttribute("id");
         let newId = idLink.replace("li-", "");

         window.scrollTo(
            0,
            document.querySelector("#" + newId).offsetTop - 100
         );

         for (const linkMenuEl of linkMenu) {
            linkMenuEl.classList.remove("active");
         }
         linkMenuEl.classList.add("active");
      });
   }

   // BACK TO TOP

   document.querySelector("#back-top").addEventListener("click", () => {
      window.scrollTo({
         top: 0,
         behavior: "smooth",
      });
   });
};

anclas();

//////////////////// PORTAFOLIO //////////////////

const proyectos = () => {
   const cardUno = document
      .querySelector(".portafolio__card--uno")
      .closest("a");
   const cardTres = document
      .querySelector(".portafolio__card--tres")
      .closest("a");
   const cardDos = document
      .querySelector(".portafolio__card--dos")
      .closest("a");
   const cardCuatro = document
      .querySelector(".portafolio__card--cuatro")
      .closest("a");
   const cardCinco = document
      .querySelector(".portafolio__card--cinco")
      .closest("a");
   const cardSeis = document
      .querySelector(".portafolio__card--seis")
      .closest("a");

   const colTres = document.querySelector("#col-tres");

   if (mediaQueryPortrait.matches) {
      cardUno.insertAdjacentElement("afterend", cardDos);
      cardCuatro.insertAdjacentElement("afterend", cardCinco);
      cardCinco.insertAdjacentElement("afterend", cardSeis);
      // console.log("m");
   } else {
      cardTres.insertAdjacentElement("afterend", cardDos);
      colTres.insertAdjacentElement("afterbegin", cardCinco);
      cardCinco.insertAdjacentElement("afterend", cardSeis);
      // console.log("d");
   }
};

mediaQueryPortrait.addListener(proyectos);
proyectos();

//////////// SCROLL HIDE

const hideTop = () => {
   const btnTop = document.querySelector("#back-top");
   var div = document.querySelector(".resume");

   window.onscroll = function () {
      var scrollPosition =
         window.pageYOffset || document.documentElement.scrollTop;

      var divPosition = div.offsetTop;

      if (scrollPosition > divPosition) {
         btnTop.style.opacity = 1;
      } else {
         btnTop.style.opacity = 0;
      }
   };
};

hideTop();

/////////////////  VIDEOS /////////////////

let swiper;
const videos = document.querySelectorAll(".videos video");
const videosGrid = document.querySelectorAll(".videos--grid__contenedor");
const videosModal = document.querySelectorAll(".modal .swiper-slide");
const myModalEl = document.getElementById("exampleModalFullscreen");

const toggleMuteAllVideos = () => {
   videos.forEach((video) => {
      video.addEventListener("volumechange", function () {
         // Obtener el estado de mute del video que disparó el evento
         const isMuted = video.muted;

         // Asignar ese estado a todos los demás videos
         videos.forEach((v) => {
            v.muted = isMuted;
         });
      });
   });
};

// function isDesktop() {
//    return (
//       window.matchMedia("(min-width: 768px)").matches &&
//       !("ontouchstart" in document.documentElement)
//    );
// }

const playVideo = () => {
   // YOUTUBE
   let videoAdded = false;

   const videoContainer = document.getElementById("video1");

   const handleVideoEvent = function (event) {
      event.preventDefault();

      if (!videoAdded) {
         this.querySelector("h4").style.display = "none";
         this.querySelector("img").style.display = "none";

         const youtubeTag = document.createElement("iframe");
         youtubeTag.setAttribute(
            "src",
            "https://www.youtube.com/embed/T84TitSO-qg?autoplay=1&mute=1"
         );
         youtubeTag.setAttribute(
            "allow",
            "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
         );
         this.appendChild(youtubeTag);
         videoAdded = true;
      } else {
         // Si ya se agregó el video, removerlo y volver a mostrar el poster y título
         const iframe = this.querySelector("iframe");
         if (iframe) {
            iframe.remove(); // Remueve completamente el iframe
            this.querySelector("h4").style.display = "block";
            this.querySelector("img").style.display = "block";
            videoAdded = false; // Restaura el estado inicial
         }
      }
   };

   // Función para gestionar los eventos según el tamaño de la ventana
   const manageVideoEvents = () => {
      // if (isDesktop()) {
      if (mediaQueryPortrait.matches) {
         videoContainer.removeEventListener("mouseenter", handleVideoEvent);
         videoContainer.removeEventListener("mouseleave", handleVideoEvent);
         videoContainer.setAttribute("data-bs-toggle", "modal"); // Agregar el modal para mobile
      } else {
         videoContainer.removeAttribute("data-bs-toggle"); // Remover el atributo modal para desktop
         videoContainer.addEventListener("mouseenter", handleVideoEvent);
         videoContainer.addEventListener("mouseleave", handleVideoEvent);
      }
   };

   // Ejecutar al cargar la página
   manageVideoEvents();

   // Escuchar el evento 'resize' y volver a ejecutar la lógica
   // window.addEventListener("resize", manageVideoEvents);
   mediaQueryPortrait.addListener(manageVideoEvents);

   // LOCALES

   videos.forEach((video) => {
      const playVideo = function () {
         this.play();
      };

      const stopVideo = function () {
         this.pause();
         this.currentTime = 0;
         this.load();
         this.removeAttribute("controls");
      };

      const handlePlay = function () {
         this.setAttribute("controls", "");
         let titulo = this.nextElementSibling;
         if (titulo && titulo.tagName === "H4") {
            titulo.style.display = "none";
         }
      };

      const handleEnded = function () {
         let titulo = this.nextElementSibling;
         if (titulo && titulo.tagName === "H4") {
            titulo.style.display = "block";
         }
         stopVideo.call(this); // Llama a stopVideo cuando el video termina
      };

      const manageVideoEventsLocales = () => {
         // if (isDesktop()) {
         if (mediaQueryPortrait.matches) {
            video.removeEventListener("mouseenter", playVideo);
            video.removeEventListener("mouseenter", handlePlay);
            video.removeEventListener("mouseleave", stopVideo);
            video.removeEventListener("mouseleave", handleEnded);
         } else {
            video.addEventListener("mouseenter", playVideo);
            video.addEventListener("mouseenter", handlePlay);
            video.addEventListener("mouseleave", stopVideo);
            video.addEventListener("mouseleave", handleEnded);
         }

         video.addEventListener("play", handlePlay);
         video.addEventListener("ended", handleEnded);
      };

      manageVideoEventsLocales();
      mediaQueryPortrait.addListener(manageVideoEventsLocales);
      // window.addEventListener("resize", manageVideoEventsLocales);

      // if (isDesktop()) {
      //    video.addEventListener("mouseenter", playVideo);
      //    video.addEventListener("mouseleave", stopVideo);
      // }
   });
};

playVideo();
// mediaQueryPortrait.addListener(playVideo);

///////// VIDEOS MODAL

const initSlider = () => {
   if (mediaQueryPortrait.matches === true) {
      return enableSwiper();
   } else if (mediaQueryPortrait.matches === false) {
      if (swiper !== undefined) {
         swiper.destroy(true, true);
      }
      return;
   }
};

const enableSwiper = () => {
   swiper = new Swiper(".swiper", {
      direction: "vertical",
      loop: true,
      slidesPerView: 1,
   });
};

mediaQueryPortrait.addListener(initSlider);
initSlider();

const videosSlide = () => {
   const iframeSlide = document.querySelector(".swiper-slide iframe");

   videosGrid.forEach((video, index) => {
      video.addEventListener("click", function () {
         swiper.slideTo(index);
      });

      if (mediaQueryPortrait.matches) {
         // console.log("m");
         video.setAttribute("data-bs-toggle", "modal");
      } else {
         // console.log("d");
         video.removeAttribute("data-bs-toggle");
      }
   });

   const stopVideo = function () {
      this.pause();
      this.currentTime = 0;
      this.load();
      this.removeAttribute("controls");
   };

   const resetVideos = () => {
      let activo = swiper.slides[swiper.activeIndex].children[0];
      if (activo.tagName === "VIDEO") {
         // iframeSlide.removeAttribute("src");
         iframeSlide.setAttribute(
            "src",
            "https://www.youtube.com/embed/T84TitSO-qg?autoplay=0&mute=1"
         );
         videosModal.forEach((slide) => {
            let videosSlides = slide.querySelectorAll("video");
            videosSlides.forEach((video) => {
               stopVideo.call(video);
            });
         });
         activo.play();
      } else if (activo.tagName === "IFRAME") {
         iframeSlide.setAttribute(
            "src",
            "https://www.youtube.com/embed/T84TitSO-qg?autoplay=1&mute=1"
         );
         videosModal.forEach((slide) => {
            let videosSlides = slide.querySelectorAll("video");
            videosSlides.forEach((video) => {
               stopVideo.call(video);
            });
         });
      }
   };

   swiper.on("slideChange", () => {
      resetVideos();
   });

   myModalEl.addEventListener("shown.bs.modal", (event) => {
      resetVideos();
   });

   myModalEl.addEventListener("hidden.bs.modal", (event) => {
      iframeSlide.removeAttribute("src");
      // iframeSlide.setAttribute(
      //    "src",
      //    "https://www.youtube.com/embed/T84TitSO-qg?autoplay=1&mute=1"
      // );
      videosModal.forEach((slide) => {
         let hijo = slide.children[0];
         if (hijo.tagName === "VIDEO") {
            stopVideo.call(slide.querySelector("video"));
         }
      });
   });
};

if (mediaQueryPortrait.matches) {
   videosSlide();
}
mediaQueryPortrait.addListener(videosSlide);

toggleMuteAllVideos();
