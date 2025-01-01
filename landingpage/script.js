
const hamburgerMenu = document.querySelector("#hamburger-menu");
const overlay = document.querySelector("#overlay");
const nav1 = document.querySelector("#nav-1");
const nav2 = document.querySelector("#nav-2");
const nav3 = document.querySelector("#nav-3");
const nav4 = document.querySelector("#nav-4");
const nav5 = document.querySelector("#nav-5");
const navItems = [nav1, nav2, nav3, nav4, nav5];

// Control Navigation Animation
function navAnimation(val1, val2) {
  navItems.forEach((nav, i) => {
    nav.classList.replace(`slide-${val1}-${i + 1}`, `slide-${val2}-${i + 1}`);
  });
}

function toggleNav() {
  // Toggle: Hamburger Open/Close
  hamburgerMenu.classList.toggle("active");

  //   Toggle: Menu Active
  overlay.classList.toggle("overlay-active");

  if (overlay.classList.contains("overlay-active")) {
    // Animate In - Overlay
    overlay.classList.replace("overlay-slide-left", "overlay-slide-right");

    // Animate In - Nav Items
    navAnimation("out", "in");
  } else {
    // Animate Out - Overlay
    overlay.classList.replace("overlay-slide-right", "overlay-slide-left");

    // Animate Out - Nav Items
    navAnimation("in", "out");
  }
}

// Events Listeners
hamburgerMenu.addEventListener("click", toggleNav);
navItems.forEach((nav) => {
  nav.addEventListener("click", toggleNav);
});


// const divElement = document.querySelector('.page1_left');
// divElement.querySelectorAll('h1').forEach(h1Element => {
//     gsap.fromTo(h1Element, {
//         opacity: 0,
//         y: -50
//     }, {
//         opacity: 1,
//         y: 0,
//         duration: 2,
//         ease: 'back.out(2)',
//         delay: 0.5 // Adjust delay as needed
//     });
// });
function breakTheText(){
    var h1 = document.querySelector(".h1")
var h1Text = h1.textContent
var splittedText = h1Text.split("")
var halfValue = splittedText.length/2
var clutter =""
splittedText.forEach(function(elem,idx){
    if(idx<halfValue){
        clutter +=` <span class="a">${elem}</span>`
    }
    else{
        clutter +=` <span class="b">${elem}</span>`
    }
})
h1.innerHTML = clutter
}

breakTheText()

gsap.from(".a",{
    y:80,
    opacity:0,
    duration:0.9,
    delay:0.5,
    stagger:0.15,
    ease: 'back.out(2)',
    scrollTrigger:".a",
    repeat: -1,
    yoyo: true
})
gsap.from(".b",{
    y:80,
    opacity:0,
    duration:0.9,
    delay:0.5,
    stagger:-0.15,
    ease: 'back.out(2)',
    scrollTrigger:".b",
    repeat: -1,
    yoyo: true
})
gsap.from(".text",{
    y:80,
    opacity:0,
    duration:0.5,
    delay:1.5,
    stagger:1,
    scrollTrigger:".text",
    ease: 'back.out(2)'
})

gsap.from(".page1_right",{
    x:150,
    y:-120,
    opacity:0,
    duration:1.3,
    delay:1.8,
    scrollTrigger:".page1_right",
    ease: 'back.out(3)',
    
})
let focus1 = document.querySelector(".focus1");

const cardsContainer1 = document.querySelector(".darksoul-container1");
document.addEventListener("mousemove",function(e)
{
    let x = e.pageX - cardsContainer1.offsetLeft;
    let y = e.pageY - cardsContainer1.offsetTop;
  
    focus1.style.background = "radial-gradient(circle at "+x+"px "+y+'px ,rgba(0, 255, 255, 0.25), transparent 120%)';
   
   
})

let focus2 = document.querySelector(".focus2");

const cardsContainer2 = document.querySelector(".darksoul-container2");
document.addEventListener("mousemove",function(e)
{
    let x = e.pageX - cardsContainer2.offsetLeft;
    let y = e.pageY - cardsContainer2.offsetTop;
  
    focus2.style.background = "radial-gradient(circle at "+x+"px "+y+'px ,rgba(156, 85, 223, 0.23), transparent 150%)';
   
   
})

let focus3 = document.querySelector(".focus3");

const cardsContainer3 = document.querySelector(".darksoul-container3");
document.addEventListener("mousemove",function(e)
{
    let x = e.pageX - cardsContainer3.offsetLeft;
    let y = e.pageY - cardsContainer3.offsetTop;
  
    focus3.style.background = "radial-gradient(circle at "+x+"px "+y+'px ,rgba(208, 36, 155, 0.23), transparent 120%)';
   
   
})
const slides = document.querySelectorAll(".slide");

slides.forEach((slide) => {
  slide.addEventListener("click", () => {
    removeActiveSlide();
    slide.classList.add("active");
  });
});

function removeActiveSlide() {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
}

gsap.from("#features .top1",{
  scale:0,
  duration:2,
  scrollTrigger:{
    trigger:".top1",
    scroller:"body",
    
  }
})
gsap.from(".out_box1",{
  scale:0,
  duration:2,
  scrollTrigger:{
    trigger:".out_box1",
    scroller:"body",
    
    start:"top 90%",
    end:"top -90%"
  }
})
gsap.from(".out_box2",{
  opacity:0,
  x:-150,
  duration:2,
  
  scrollTrigger:{
    trigger:".out_box2",
    scroller:"body",
   
start:"top 90%",
    end:"top -90%"
  }
})
gsap.from(".out_box3",{
  opacity:0,
  x:150,
  duration:2,
  
  scrollTrigger:{
    trigger:".out_box3",
    scroller:"body",
    
    start:"top 90%",
    end:"top -90%"
  }
})
gsap.from(".out_box4",{
  scale:0,
  duration:2,
  
  scrollTrigger:{
    trigger:".out_box4",
    scroller:"body",
    
    start:"top 90%",
    end:"top -90%"
  }
})
gsap.from(".outer1",{
  scale:0,
  duration:2,
  scrollTrigger:{
    trigger:".outer1",
    scroller:"body",
    start:"top 100%",
    end:"top -90%"
  }
})
gsap.from(".outer2",{
  scale:0,
  duration:2,
  scrollTrigger:{
    trigger:".outer2",
    scroller:"body",
    start:"top 100%",
    end:"top -90%"
  }
})
gsap.from(".side1",{
  opacity:0,
  x:-150,
  duration:2,
  
  scrollTrigger:{
    trigger:".side1",
    scroller:"body",
    
start:"top 100%",
    end:"top -90%"
  }
})
gsap.from(".side2",{
  opacity:0,
  x:-150,
  duration:2,
  delay:1,
  scrollTrigger:{
    trigger:".side2",
    scroller:"body",
    
start:"top 100%",
    end:"top -90%"
  }
})
gsap.from(".container1",{
  opacity:0,
  x:-150,
  duration:2,
  
  scrollTrigger:{
    trigger:".container1",
    scroller:"body",
    
start:"top 100%",
    end:"top -90%"
  }
})
