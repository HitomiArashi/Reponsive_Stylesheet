// Modal functionality
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImg");
const closeModal = document.getElementById("closeModal");

document.querySelectorAll(".grid img").forEach(img => {
  img.addEventListener("click", () => {
    modal.style.display = "block";
    modalImg.src = img.src;
  });
});

closeModal.addEventListener("click", () => modal.style.display = "none");
document.addEventListener("keydown", e => {
  if (e.key === "Escape") modal.style.display = "none";
});

// Also handle ESC key
document.addEventListener("keydown", e => {
  if (e.key === "Escape" && modal.classList.contains("show")) {
    modal.classList.remove("show");
    setTimeout(() => modal.style.display = "none", 300);
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById("themeToggle");
  const motionToggle = document.getElementById("motionToggle");

  // === Theme Toggle ===
  themeToggle.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark-theme");

    if (document.documentElement.classList.contains("dark-theme")) {
      themeToggle.textContent = "🌙 Dark Mode"; // when dark mode is ON
    } else {
      themeToggle.textContent = "🌞 Light Mode";  // when light mode is ON
    }
  });

  // === Motion Toggle ===
  motionToggle.addEventListener("click", () => {
    document.body.classList.toggle("reduced-motion");

    if (document.body.classList.contains("reduced-motion")) {
      motionToggle.textContent = "Motion: Off";
    } else {
      motionToggle.textContent = "Motion: On";
    }
  });
});
