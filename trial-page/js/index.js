document.addEventListener("DOMContentLoaded", function () {
  // Hide the projects section on page load
  const projectsSection = document.getElementById("projects");
  if (projectsSection) {
    projectsSection.style.display = "none";
  }

  // Show the default landing page on page load
  showSection("landing");
});

function showSection(sectionId) {
  const sections = document.querySelectorAll(".container-section");
  sections.forEach((section) => {
    section.style.display = "none";
  });

  const selectedSection = document.getElementById(sectionId);
  if (selectedSection) {
    selectedSection.style.display = "block";
  }
}

function toggleHiddenProjects() {
  const hiddenProjects = document.querySelectorAll(".project.hidden");
  hiddenProjects.forEach((project) => {
    project.classList.remove("hidden");
  });

  let showMoreBtn = document.querySelector(".btn-show-more");
  if (showMoreBtn) {
    showMoreBtn.style.display = "none";
  }
}

function toggleMenu() {
  const menu = document.querySelector(".menu");
  menu.style.left = menu.style.left === "0px" ? "-250px" : "0px";
}

function closeMenu() {
  const menu = document.querySelector(".menu");
  menu.style.left = "-250px";
}
