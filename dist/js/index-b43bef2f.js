import"./main-a9b5e7f3.js";const i=window.matchMedia("(max-width: 1279px)");function y(){function e(r){var n=r[0].getTotalLength();r.css("stroke-dasharray",n),r.css("stroke-dashoffset",n)}var t=$("#pathNuestros");e(t);var o=new ScrollMagic.Controller,a=new TimelineMax().add(TweenMax.to(t,1,{strokeDashoffset:0,ease:"sine.in",delay:1})).add(TweenMax.to("path",0,{ease:"sine.in"}),0);new ScrollMagic.Scene({triggerElement:"#about",duration:100,tweenChanges:!0,triggerHook:"onEnter"}).setTween(a).addTo(o)}y();const f=()=>{gsap.fromTo(".portafolio--title--uno",{xPercent:-40,opacity:0},{xPercent:0,opacity:1,duration:1,ease:"ease",delay:0,scrollTrigger:{trigger:".portafolio",start:"-=200 center",end:"top center",toggleActions:"restart pause reverse pause",scrub:2}}),gsap.fromTo(".portafolio--title svg path",{scaleX:0},{scaleX:1,scrollTrigger:{trigger:".portafolio",start:"+=100 center",end:"=350 center",ease:"ease",scrub:1,toggleActions:"restart pause reverse pause"}})};f();const h=()=>{gsap.fromTo(".contact--title--dos",{xPercent:-40,opacity:0},{xPercent:0,opacity:1,duration:1,ease:"ease",delay:0,scrollTrigger:{trigger:".contact",start:"-=200 center",end:"top center",toggleActions:"restart pause reverse pause",scrub:2}}),gsap.fromTo(".contact--title svg path",{scaleX:0},{scaleX:1,duration:2,scrollTrigger:{trigger:".contact",start:"+=200 center",end:"=450 center",ease:"ease",scrub:1,toggleActions:"restart pause reverse pause"}})};h();const p=(e,t,o=0)=>{gsap.fromTo(e,{xPercent:t,opacity:0},{xPercent:0,opacity:1,duration:1.5,delay:o,ease:"ease"})},c=(e,t,o=0)=>{gsap.fromTo(e,{yPercent:t,opacity:0},{yPercent:0,opacity:1,duration:.8,delay:o,ease:"ease"})},s=(e,t,o,a)=>{gsap.fromTo(e,{xPercent:o,opacity:0},{xPercent:0,opacity:1,duration:1.5,ease:"ease",delay:0,scrollTrigger:{trigger:t,start:"-=200 center",end:"top center",scrub:5,toggleActions:"restart pause reverse pause"},onComplete:function(){}})},l=(e,t,o=40,a=0)=>{var r=gsap.utils.toArray(e);r.forEach(n=>{gsap.fromTo(e,{yPercent:o,opacity:0},{yPercent:0,opacity:1,duration:.5,ease:"ease",delay:a,scrollTrigger:{trigger:t,start:"-=400 center",end:"top center",scrub:5,toggleActions:"restart pause reverse pause"}})})},d=(e,t,o=40)=>{var a=gsap.utils.toArray(e);a.forEach(r=>{gsap.fromTo(e,{yPercent:o,opacity:0},{yPercent:0,opacity:1,duration:.1,ease:"ease",scrollTrigger:{trigger:t,start:"-=400 center",end:"top center",scrub:2.5,toggleActions:"restart pause reverse pause"}})})},v=()=>{gsap.utils.toArray(".portafolio--contenedor a").forEach(t=>{gsap.fromTo(t,{y:60,opacity:0},{y:0,opacity:1,scrollTrigger:{trigger:t,start:"-=400 center",end:"top center",scrub:5,toggleActions:"restart pause reverse pause"}})})};v();p(".hero--title--uno",40);p(".hero--title--dos",-40,1);s(".portafolio--title--dos",".portafolio",40);l(".portafolio #title-mobile",".portafolio",60);s(".worked h2",".worked",-40);s(".worked--logos img",".worked",240);l(".videos .videos--grid__contenedor",".videos",60);s(".contact--title--uno",".contact",40);s(".contact__link",".contact",-40);s(".contact #title-mobile",".contact",40);i.matches?(c(".hero--text",40),c(".resume img",40,.7),c(".resume--text",-40,.8),d(".contact--img",".contact",40)):(d(".resume img",".resume",60),l(".resume--text",".resume"));const T=()=>{const e=document.querySelectorAll(".header--one li");for(const t of e)t.addEventListener("click",()=>{let a=t.getAttribute("id").replace("li-","");window.scrollTo(0,document.querySelector("#"+a).offsetTop-100);for(const r of e)r.classList.remove("active");t.classList.add("active")});document.querySelector("#back-top").addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})})};T();const m=()=>{const e=document.querySelector(".portafolio__card--uno").closest("a"),t=document.querySelector(".portafolio__card--tres").closest("a"),o=document.querySelector(".portafolio__card--dos").closest("a"),a=document.querySelector(".portafolio__card--cuatro").closest("a"),r=document.querySelector(".portafolio__card--cinco").closest("a"),n=document.querySelector(".portafolio__card--seis").closest("a"),g=document.querySelector("#col-tres");i.matches?(e.insertAdjacentElement("afterend",o),a.insertAdjacentElement("afterend",r),r.insertAdjacentElement("afterend",n)):(t.insertAdjacentElement("afterend",o),g.insertAdjacentElement("afterbegin",r),r.insertAdjacentElement("afterend",n))};i.addListener(m);m();const w=()=>{const e=document.querySelector("#back-top");var t=document.querySelector(".resume");window.onscroll=function(){var o=window.pageYOffset||document.documentElement.scrollTop,a=t.offsetTop;o>a?e.style.opacity=1:e.style.opacity=0}};w();function u(){return window.matchMedia("(min-width: 768px)").matches&&!("ontouchstart"in document.documentElement)}const E=()=>{document.addEventListener("DOMContentLoaded",function(){let e=!1;const t=document.getElementById("video1"),o=function(a){if(a.preventDefault(),e){const r=this.querySelector("iframe");r&&(r.remove(),this.querySelector("h4").style.display="block",this.querySelector("img").style.display="block",e=!1)}else{this.querySelector("h4").style.display="none",this.querySelector("img").style.display="none";const r=document.createElement("iframe");r.setAttribute("src","https://www.youtube.com/embed/T84TitSO-qg?autoplay=1&mute=1"),r.setAttribute("allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"),this.appendChild(r),e=!0}};u()?(t.addEventListener("mouseenter",o),t.addEventListener("mouseleave",o)):t.addEventListener("click",o)}),document.querySelectorAll(".videos video").forEach(e=>{const t=function(){this.play()},o=function(){this.pause(),this.currentTime=0,this.load(),this.removeAttribute("controls")},a=function(){this.setAttribute("controls","");let n=this.nextElementSibling;n&&n.tagName==="H4"&&(n.style.display="none")},r=function(){let n=this.nextElementSibling;n&&n.tagName==="H4"&&(n.style.display="block"),o.call(this)};u()?(e.addEventListener("mouseenter",t),e.addEventListener("mouseleave",o)):e.addEventListener("click",function(){this.paused?t.call(this):o.call(this)}),e.addEventListener("play",a),e.addEventListener("ended",r)})};E();
