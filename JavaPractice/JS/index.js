//cannot be reserved words
//should be meaningful/descripted
//cannot start with a number (1name)
//cannot contain a space or hyphen (-)
//are case sensitive

document.addEventListener("DOMContentLoaded", function () {
  // Hide the projects section on page load
  const projectsSection = document.getElementById("projects");
  if (projectsSection) {
    projectsSection.style.display = "none";
  }

  // Show the default landing page on page load
  showSection("landing");
});

// ========== test

document.addEventListener("DOMContentLoaded", function () {
  function toggleHiddenProjects() {
    // Toggle the visibility of the "Show More" and "Show Less" buttons
    showMoreBtn.style.display = "none";
    showLessBtn.style.display = "inline-block";
  }
});

// ========== test

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

  const showMoreBtn = document.querySelector(".btn-show-more");
  showMoreBtn.style.display = "none";
}

function toggleMenu() {
  const menu = document.querySelector(".menu");
  menu.style.left = menu.style.left === "0px" ? "-250px" : "0px";
}

function closeMenu() {
  const menu = document.querySelector(".menu");
  menu.style.left = "-250px";
}

// ===================

// Add an event listener to the "Show More" button
const showMoreBtn = document.querySelector(".btn-show-more");
if (showMoreBtn) {
  showMoreBtn.addEventListener("click", toggleHiddenProjects);
}

// Add an event listener to the "Show Less" button (initially hidden)
const showLessBtn = document.querySelector(".btn-show-less");
if (showLessBtn) {
  showLessBtn.addEventListener("click", toggleHiddenProjects);
}
