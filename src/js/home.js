const revealLoad = (el, movimiento) => {
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
         duration: 0.5,
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

const animacionY = (el, trigger) => {
   gsap.fromTo(
      el,
      {
         yPercent: 40,
         opacity: 0,
      },
      {
         yPercent: 0,
         opacity: 1,
         duration: 0.5,
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
revealLoad(".hero--title--dos", -40);
animacionX(".portafolio--title--uno", ".portafolio", 40);
animacionX(".portafolio--title--dos", ".portafolio", -40);
animacionX(".worked h2", ".worked", -40);
animacionX(".contact--title--dos", ".contact", 40);
animacionX(".contact--title--uno", ".contact", -40);

animacionY(".resume img", ".resume");
animacionY(".resume--text", ".resume");

animacionY(".portafolio__card", ".portafolio");
animacionY(".worked--logos img", ".worked");

// HEADER

const linkMenu = document.querySelectorAll(".header--one li");
for (const linkMenuEl of linkMenu) {
   linkMenuEl.addEventListener("click", () => {
      let idLink = linkMenuEl.getAttribute("id");
      let newId = idLink.replace("li-", "");

      window.scrollTo(0, document.querySelector("#" + newId).offsetTop - 100);

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
