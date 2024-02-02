const load = () => {
  let tl = gsap.timeline();

  tl.to(".yellow1", {
    top: "-100%",
    delay: 0.5,
    ease: "expo.out",
    duration: 1,
  });
  tl.to(".loader", {
    top: "-100%",
    delay: 0.5,
    ease: "expo.out",
    duration: 1,
  });
};
load();

const scroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true,
});

document.querySelector('.back-to-top h2').addEventListener('click', ()=>{
  scroll.scrollTo(0)
})
let elements = document.querySelectorAll('.elem');
let page2 = document.querySelector('.page2');
elements.forEach((element) => {
  element.addEventListener('mouseenter', ()=> {
    let bgImage = element.getAttribute('data-img');
    page2.style.backgroundImage = `url('${bgImage}')`;
  })
})