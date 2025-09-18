const sideNav = document.getElementById("sideNav");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300 && !sideNav.classList.contains("active")) {
    document.querySelector(".nav2").classList.add("surface-nav");
  } else {
    document.querySelector(".nav2").classList.remove("surface-nav");
  }
});

function startSidebar() {
  const sideNav = document.getElementById("sideNav");
  sideNav.classList.add("active");
  document.querySelector(".nav2").classList.remove("surface-nav");
}

function endSidebar() {
  const sideNav = document.getElementById("sideNav");
  sideNav.classList.remove("active");
  if (window.scrollY > 400 && window.innerWidth > 100) {
    document.querySelector(".nav2").classList.add("surface-nav");
  } else {
    document.querySelector(".nav2").classList.remove("surface-nav");
  }
}
