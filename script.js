// Menu toggle
function openMenu() {
  document.getElementById("navemenus").style.right = "0";
}
function hideMenu() {
  document.getElementById("navemenus").style.right = "-260px";
}

// Clock
function showTime() {
  document.getElementById("currentTime").innerHTML = new Date().toUTCString();
}
showTime();
setInterval(showTime, 1000);

// Smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
    hideMenu();
  });
});

// Search functionality
function searchSection() {
  let query = document.getElementById("searchInput").value.toLowerCase();
  let sections = {
    home: "header",
    about: "about",
    skills: "skills",
    services: "services",
    contact: "contact"
  };
  if (sections[query]) {
    document
      .getElementById(sections[query])
      .scrollIntoView({ behavior: "smooth" });
  } else {
    alert("Section not found!");
  }
}

// Active nav highlight on scroll
const sections = document.querySelectorAll(
  "header, .about_me, .skills, .services, .location"
);
const navLi = document.querySelectorAll(".menu li");
window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });
  navLi.forEach((li) => {
    li.classList.remove("active");
    if (li.querySelector("a").getAttribute("href").includes(current)) {
      li.classList.add("active");
    }
  });
});
