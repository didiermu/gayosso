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

const animacionX = (el, trigger, movimiento) => {
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
            start: "-=400 center",
            end: "+=200 center",
            scrub: 5,
            toggleActions: "restart pause reverse pause",
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
               end: "+=200 center",
               scrub: 5,
               toggleActions: "restart pause reverse pause",
            },
         }
      );
   });
};

const animacionYFast = (el, trigger, movimiento = 40) => {
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
            start: "top center",
            end: "top center",
            scrub: 2.5,
            toggleActions: "restart pause reverse pause",
         },
      }
   );
};

revealLoad(".hero--title--uno", 40);
revealLoad(".hero--title--dos", -40, 1);

animacionX(".portafolio--title--uno", ".portafolio", 40);
animacionX(".portafolio--title--dos", ".portafolio", -140);

animacionX(".worked h2", ".worked", -40);

animacionX(".contact--title--dos", ".contact", 40);
animacionX(".contact--title--uno", ".contact", -40);

animacionYSlow(".resume img", ".resume");
animacionYSlow(".resume--text", ".resume");

animacionYFast(".portafolio--contenedor a", ".portafolio--contenedor", 260);
animacionX(".worked--logos img", ".worked", 240);

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

// SVG
function drawSvgServicios() {
   function pathPrepare($el) {
      var lineLength = $el[0].getTotalLength();
      $el.css("stroke-dasharray", lineLength);
      $el.css("stroke-dashoffset", lineLength);
   }

   var $pathNuestros = $("#pathNuestros");

   // prepare SVG

   pathPrepare($pathNuestros);

   // init controller
   var controller = new ScrollMagic.Controller();

   // build tween

   var tween = new TimelineMax()
      .add(
         TweenMax.to($pathNuestros, 1, {
            strokeDashoffset: 0,
            ease: "sine.in",
            delay: 1,
         })
      )
      .add(TweenMax.to("path", 0, { ease: "sine.in" }), 0);

   // build scene

   var scene2 = new ScrollMagic.Scene({
      triggerElement: "#about",
      duration: 100,
      tweenChanges: true,
      triggerHook: "onEnter",

      // triggerHook: 0.65,
   })
      .setTween(tween)
      .addTo(controller);
}

drawSvgServicios();

//////////////////// PORTAFOLIO //////////////////

const mediaQuery = window.matchMedia("(max-width: 1279px)");

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

   if (mediaQuery.matches) {
      cardUno.insertAdjacentElement("afterend", cardDos);
      cardCuatro.insertAdjacentElement("afterend", cardCinco);
      cardCinco.insertAdjacentElement("afterend", cardSeis);
      console.log("m");
   } else {
      cardTres.insertAdjacentElement("afterend", cardDos);
      colTres.insertAdjacentElement("afterbegin", cardCinco);
      cardCinco.insertAdjacentElement("afterend", cardSeis);
      console.log("d");
   }
};

mediaQuery.addListener(proyectos);
proyectos();
