///////////////////////////////////////////////////////////
// Sticky navigation

const header = document.querySelector("header");
const navbar = document.querySelector(".nav-wrapper");
const logo = document.querySelector(".main-logo")

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);

    if (ent.isIntersecting === false) {
      navbar.classList.add("sticky");
    }

    if (ent.isIntersecting === true) {
      navbar.classList.remove("sticky");
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-300px",
  }
);
obs.observe(header);

// animate car
let tml = gsap.timeline({repeat:-1});
let start = 0;
let end = 320;
tml.fromTo(".car-logo", {x:start}, {duration:8, delay:2, x:end, ease:'none'})
.to(".car-logo", {duration:0.2, delay:1,scaleX:-1, ease:'none'})
.to(".car-logo", {duration:0.3, delay:0.5, rotation:30})
.to(".car-logo", {duration:0.3, delay:0.5, rotation:0})
.to(".car-logo", {duration:8, delay:0.5, x:start, ease:'none'})
.to(".car-logo", {duration:0.2, delay:1,scaleX:1, ease:'none' });
