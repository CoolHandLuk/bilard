/* menu */

const menuToggler = document.querySelector(".menu-toggle");
const body = document.querySelector("body");
const menuItem = document.querySelectorAll(".nav-link");
const icon = document.querySelector("#icon");

menuToggler.addEventListener("click", () => {
  body.classList.toggle("open");
});

menuItem.forEach((item) => {
  item.addEventListener("click", () => {
    body.classList.toggle("open");
  });
});

/* show up */
const faders = document.querySelectorAll(".fade-in");

const appearOptions = {
  threshold: 0,
  rootMargin: "0px 0px -300px 0px",
};

const appearOnScroll = new IntersectionObserver(function (
  entries,
  appearOnScroll
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      appearOnScroll.unobserve(entry.target);
    }
  });
},
appearOptions);

faders.forEach((fader) => {
  appearOnScroll.observe(fader);
});

// Pop up
let poppy = localStorage.getItem('popup')
if(!poppy){
setTimeout(() => {
  const closeButton = document.querySelector('.popup-button');
const overlay = document.querySelector('.overlay');
const popup = document.querySelector('.popup');
popup.classList.add('active');
overlay.classList.add('active');
// zamykanie popupu
closeButton.addEventListener('click', ()=>{
popup.classList.remove('active');
overlay.classList.remove('active');
})
}, 3000);
localStorage.setItem('popup', 'true');
}
