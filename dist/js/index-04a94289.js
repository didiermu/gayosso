import"./main-10a71cff.js";const s=(t,e,o=0)=>{gsap.fromTo(t,{xPercent:e,opacity:0},{xPercent:0,opacity:1,duration:1.5,delay:o,ease:"ease"})},n=(t,e,o)=>{gsap.fromTo(t,{xPercent:o,opacity:0},{xPercent:0,opacity:1,duration:1.5,ease:"ease",delay:0,scrollTrigger:{trigger:e,start:"top center",end:"top center",scrub:5,toggleActions:"restart pause reverse pause"}})},i=(t,e,o=40,a=0)=>{var r=gsap.utils.toArray(t);r.forEach(c=>{gsap.fromTo(t,{yPercent:o,opacity:0},{yPercent:0,opacity:1,duration:.5,ease:"ease",delay:a,scrollTrigger:{trigger:e,start:"top center",end:"top center",scrub:5,toggleActions:"restart pause reverse pause"}})})},d=(t,e,o=40)=>{gsap.fromTo(t,{yPercent:o,opacity:0},{yPercent:0,opacity:1,duration:.1,ease:"ease",scrollTrigger:{trigger:e,start:"top center",end:"top center",scrub:2.5,toggleActions:"restart pause reverse pause"}})};s(".hero--title--uno",40);s(".hero--title--dos",-40,1);n(".portafolio--title--uno",".portafolio",40);n(".portafolio--title--dos",".portafolio",-140);n(".worked h2",".worked",-40);n(".contact--title--dos",".contact",40);n(".contact--title--uno",".contact",-40);i(".resume img",".resume");i(".resume--text",".resume");d(".portafolio--contenedor a",".portafolio--contenedor",260);n(".worked--logos img",".worked",240);const u=()=>{const t=document.querySelectorAll(".header--one li");for(const e of t)e.addEventListener("click",()=>{let a=e.getAttribute("id").replace("li-","");window.scrollTo(0,document.querySelector("#"+a).offsetTop-100);for(const r of t)r.classList.remove("active");e.classList.add("active")});document.querySelector("#back-top").addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})})};u();function p(){function t(r){var c=r[0].getTotalLength();r.css("stroke-dasharray",c),r.css("stroke-dashoffset",c)}var e=$("#pathNuestros");t(e);var o=new ScrollMagic.Controller,a=new TimelineMax().add(TweenMax.to(e,1,{strokeDashoffset:0,ease:"sine.in",delay:1})).add(TweenMax.to("path",0,{ease:"sine.in"}),0);new ScrollMagic.Scene({triggerElement:"#about",duration:100,tweenChanges:!0,triggerHook:"onEnter"}).setTween(a).addTo(o)}p();const g=()=>{const t=window.matchMedia("(min-width: 768px)"),e=document.querySelector(".portafolio__card--uno").closest("a"),o=document.querySelector(".portafolio__card--dos").closest("a"),a=document.querySelector(".portafolio__card--cuatro").closest("a"),r=document.querySelector(".portafolio__card--cinco").closest("a"),c=document.querySelector(".portafolio__card--seis").closest("a");t.addListener(function(l){l.matches&&(e.insertAdjacentElement("afterend",o),a.insertAdjacentElement("afterend",r),r.insertAdjacentElement("afterend",c),console.log("p"))})};g();
