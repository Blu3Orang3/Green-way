
//////////////////////////////////////////////////////////
// Sticky navigation
const header = document.querySelector("header");
const navbar = document.querySelector(".nav-wrapper");
const logo = document.querySelector(".main-logo");
const carLogo = document.querySelector(".car-logo");
const navLinks = document.querySelector(".home-link");
const number  = document.querySelector(".number");



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
    rootMargin: "-150px",
  }
);
obs.observe(header);

// Make mobile navigation work

const mobileNav = document.querySelector(".btn-mobile-nav");

mobileNav.addEventListener("click", function () {
  header.classList.toggle("nav-open");
});


// animate car
$(document).ready(function() {
  windowWidth = $(window).width();

  let tml = gsap.timeline({ repeat:-1});
  let start = 0;
  let end = '25rem';
  let reduce1 = 4;
  let reduce2 = 3;
  console.log(end);
  let obj ='';

  if(windowWidth>1500) {
    obj = '.car-animation';
    tml.fromTo(obj,{x:start}, {duration:reduce1, delay:2, x:end, ease:'none'})
    .to(obj, {duration:0.2, delay:1,scaleX:-1, ease:'none'})
    .to(obj, {duration:0.3, delay:0.5, rotation:30})
    .to(obj, {duration:0.3, delay:0.5, rotation:0})
    .to(obj, {duration:reduce2, delay:0.5, x:start, ease:'none'})
    .to(obj, {duration:0.2, delay:1,scaleX:1, ease:'none' });

  }
  $(window).resize(function(){
    windowWidth = $(window).width();
    if (windowWidth<1500) {
      tml.progress(1).pause();
    }
    if (windowWidth>1500) {
      tml.progress(1).resume();
    }
  })
});


// ----swiper
var currentSlidesPerView;
 
function updateSwiperSlides(windowWidth) {
  var totalSlidesPerView;
  if (windowWidth > 1000) {
    totalSlidesPerView = 3;
  } else if (windowWidth > 800) {
    totalSlidesPerView = 2;
  } else {
    totalSlidesPerView = 1;
  }

  if (currentSlidesPerView === totalSlidesPerView) return;

  currentSlidesPerView = totalSlidesPerView;

  //Initialize Swiper

  new Swiper('.mySwiper', {
    slidesPerView: currentSlidesPerView,
    spaceBetween: 50,
    slidesPerGroup: currentSlidesPerView,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.button-next',
      prevEl: '.button-prev',
    },
  });
}



//OnLoad: (check the screen size when the page loads)
$(document).ready(function () {
  windowWidth = $(window).width();
  updateSwiperSlides(windowWidth);

  //onResize (check the screen size when the page resizes)
  $(window).resize(function () {
    windowWidth = $(window).width();
    updateSwiperSlides(windowWidth);
  });
});

$(document).ready(function(){
  $('.upload-box input').change(function () {
    $('.upload-box label').text(this.files.length + " file(s) selected");
  });
});



$("form#cta-form1").submit(function(e) {
  e.preventDefault();    
  var formData = new FormData(this);
  console.log(formData);

  $.ajax({
      // url: "https://www.actionforms.io/e/r/gioxan-test",
      url: "https://formsubmit.co/0faac3b91553191bbf261b0fe4c88766",
      type: 'POST',
      data: formData,
      success: function (data) {
        // state triger
      },
      cache: false,
      contentType: false,
      processData: false
  });
});


// ------------------------------------------------------
// scroll up
mybutton = document.getElementById("scrollUp");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
   

// FilePond.registerPlugin(
//   FilePondPluginImagePreview,
//   FilePondPluginImageResize,
//   FilePondPluginImageTransform
// );
const inputElement = document.querySelector('input[type="file"]');
const pond = FilePond.create(inputElement, {
  imageResizeTargetWidth: 256,
  imageResizeMode: 'contain',



});
