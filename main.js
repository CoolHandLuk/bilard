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
    console.log(entry);
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
