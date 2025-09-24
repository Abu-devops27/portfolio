// Smooth scroll effect for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Optional: Add scroll reveal animation
window.addEventListener("scroll", () => {
  document.querySelectorAll("section").forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 200;
    let height = sec.offsetHeight;
    if (top >= offset && top < offset + height) {
      sec.classList.add("active");
    }
  });
});
