const sidebar = document.querySelector(".sidebar");
const toggleBtn = document.querySelector(".toggle-btn");
const listInfo = document.querySelector(".list-info");
const listImg = document.querySelector(".list-img");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");

let index = 0;

// Nav buttons
nextBtn.addEventListener("click", () => {
  index = index < 3 ? index + 1 : 3;
  listInfo.style.transform = `translateY(${index * -25}%)`;
  listImg.style.transform = `translateY(${index * -100}%)`;
});

prevBtn.addEventListener("click", () => {
  index = index > 0 ? index - 1 : 0;
  listInfo.style.transform = `translateY(${index * -25}%)`;
  listImg.style.transform = `translateY(${index * -100}%)`;
});

// Sidebar toggle
toggleBtn.addEventListener("click", () => {
  sidebar.classList.toggle("active");
});
