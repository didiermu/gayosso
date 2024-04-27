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
      triggerElement: ".hero",
      duration: 100,
      tweenChanges: true,
      triggerHook: "onEnter",

      // triggerHook: 0.65,
   })
      .setTween(tween)
      .addTo(controller);
}

drawSvgHero();

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
         duration: 1,
         delay: delay,
         ease: "ease",
      }
   );
};

const animacionEachY = (el, movimiento = 40) => {
   const boxes = gsap.utils.toArray(el);
   boxes.forEach((box) => {
      gsap.fromTo(
         box,
         {
            y: movimiento,
            opacity: 0,
         },
         {
            y: 0,
            opacity: 1,
            scrollTrigger: {
               trigger: box,
               start: "-=450 center",
               end: "top center",
               scrub: 5,
               toggleActions: "restart pause reverse pause",
            },
         }
      );
   });
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
               // markers: true,
            },
         }
      );
   });
};

revealLoad(".hero--title", -40);
revealLoad(".hero--info", 40);

// animacionYSlow(".descripcion [class*='col-']", ".descripcion");

animacionEachY(".descripcion h2");
animacionEachY(".descripcion h4");
animacionEachY(".descripcion h5");
animacionEachY(".descripcion p");
animacionEachY(".descripcion img");
animacionEachY(".descripcion .col-lg-6");

animacionYSlow(".conclusion [class*='col-']", ".conclusion");
animacionYSlow(".otros [class*='col-']", ".otros");

// SCROLL HIDE

const hideTop = () => {
   const btnTop = document.querySelector("#back-top");
   var div = document.querySelector(".descripcion");

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
