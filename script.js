const burger = document.querySelector(".toggle__menu");
const header = document.querySelector(".header__nav");
const get =document.querySelector(".get-in-touch .get")
burger.addEventListener("click", () =>{
  burger.classList.toggle('open');
  header.classList.toggle('open');
  dot.classList.remove('open');
  time.classList.remove('open');
  get.classList.toggle('z');
});

const dot = document.querySelector(".toggle__menu1");
const time = document.querySelector(".info")
dot.addEventListener("click", ()=>{
  dot.classList.toggle('open');
  time.classList.toggle('open');
  burger.classList.remove('open');
  header.classList.remove('open');
});
// const fachev = document.querySelector(".navi li i");
// const drop = document.querySelector(".drop");
// fachev.addEventListener("click", () =>{
//   drop.classList.toggle('open');
// fachev.classList.toggle('open');
// });


const fachev1 = document.querySelectorAll(".navi .down")
fachev1.forEach((song) => {
    song.addEventListener("click", () => {
        song.querySelector(".drop").classList.toggle("open");
        song.querySelector("i").classList.toggle("open");
        song.classList.toggle("blue");
      
    })
});

var slider = tns({
  container: '.get-in-touch__wrapper',
  items: 1,
  axis: 'vertical',
  slideBy: 'page',
  autoplay: true
});

const up = document.querySelector(".up") ;
window.addEventListener("scroll", () => {
  console.log(window.pageYOffset);
  if(window.pageYOffset >=100){
    up.classList.add("show")
  }
  else{
    up.classList.remove("show")
  }
});

const discover =document.querySelectorAll(".discover__nav__link");
const discoverContent =document.querySelectorAll(".dis__sec__content");
discover.forEach((star) => {
  star.addEventListener("click", () => {
    removeActiveStar();
    star.classList.add("active");
    const activeContent= document.querySelector(`#${star.id}-content`);
    removeActiveContent();
    activeContent.classList.add("active");
  })
});

function removeActiveStar(){
  discover.forEach((star) => {
    star.classList.remove("active");
  })
}

function removeActiveContent(){
  discoverContent.forEach((star) => {
    star.classList.remove("active");
  })
}

var slider = tns({
  container: '.latest__card',
  items: 1,
  slideBy: 'page',
  autoplay: false,
  axis: "horizontal",
  controls: false,
  nav: true,
  autoplayPosition: false,
  autoplayButton:false,
  responsive:{
    1080:{
        items:2,
        autoplay: true,
    }
  }
});