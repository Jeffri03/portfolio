// Scroll reveal effect
window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section");
    const scrollY = window.scrollY + window.innerHeight - 100;
  
    sections.forEach(section => {
      if (scrollY > section.offsetTop) {
        section.style.opacity = 1;
        section.style.transform = "translateY(0)";
      }
    });
  });
  
  // Back to Top Button
  const topBtn = document.createElement("button");
  topBtn.textContent = "↑ Top";
  topBtn.style.position = "fixed";
  topBtn.style.bottom = "20px";
  topBtn.style.right = "20px";
  topBtn.style.padding = "10px 15px";
  topBtn.style.border = "none";
  topBtn.style.borderRadius = "5px";
  topBtn.style.backgroundColor = "#00adb5";
  topBtn.style.color = "#fff";
  topBtn.style.fontSize = "16px";
  topBtn.style.cursor = "pointer";
  topBtn.style.display = "none";
  
  document.body.appendChild(topBtn);
  
  window.addEventListener("scroll", () => {
    topBtn.style.display = window.scrollY > 300 ? "block" : "none";
  });
  
  topBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  const modeToggle = document.getElementById("modeToggle");

// Load preference on page load
window.addEventListener("DOMContentLoaded", () => {
  const darkModeEnabled = localStorage.getItem("darkMode") === "true";
  if (darkModeEnabled) {
    document.body.classList.add("dark-mode");
    modeToggle.checked = true;
  }
});

// Update preference on toggle
modeToggle.addEventListener("change", () => {
  document.body.classList.toggle("dark-mode");
  localStorage.setItem("darkMode", modeToggle.checked);
});
