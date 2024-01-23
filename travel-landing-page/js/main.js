const menuToggle = document.querySelector(".toggle");
const showcase = document.querySelector(".showcase");
const wrapper = document.querySelector(".wrapper");
const loginLink = document.querySelector(".login-link");
const registerLink = document.querySelector(".register-link");
const LoginMain = document.querySelector(".btnLoginMain");
const iconClose = document.querySelector(".icon-close");
const menu = document.querySelector(".menu");
// testing //

let showMenu = false;

//testing//

/*menu bar toggle*/
menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
  menu.classList.toggle("visible");
  //   showcase.classList.toggle("active");
});

// login register menu toggle

registerLink.addEventListener("click", () => {
  wrapper.classList.add("active");
});

loginLink.addEventListener("click", () => {
  wrapper.classList.remove("active");
});

LoginMain.addEventListener("click", () => {
  wrapper.classList.add("active-popup");
});

iconClose.addEventListener("click", () => {
  wrapper.classList.remove("active-popup");
});
