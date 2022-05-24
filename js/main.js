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
let car = TweenMax.fromTo(".car-logo", 8, {x:0}, {delay:2, x:300, ease:Linear.easeNone, repeat:-1});
t.progress(0.5).pause();
