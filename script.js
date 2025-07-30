// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Back to top button
  const topBtn = document.getElementById("topBtn");
  window.onscroll = function () {
    topBtn.style.display = window.scrollY > 300 ? "block" : "none";
  };
  topBtn.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });
  
  // Dark mode toggle
  document.getElementById("darkToggle").addEventListener("change", function () {
    document.body.classList.toggle("dark");
  });
  