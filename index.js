window.addEventListener("scroll", () => {
  if (window.scrollY > 500 && window.innerWidth > 100) {
    document.querySelector(".nav2").classList.add("surface-nav");
  } else {
    document.querySelector(".nav2").classList.remove("surface-nav");
  }
});
