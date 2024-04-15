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

revealLoad(".hero--col-img", -40);
revealLoad(".hero--col-info", 40);

animacionYSlow(".descripcion [class*='col-']", ".descripcion");
animacionYSlow(".conclusion [class*='col-']", ".conclusion");
animacionYSlow(".otros [class*='col-']", ".otros");
