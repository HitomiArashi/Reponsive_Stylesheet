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

// Theme toggle
const themeBtn = document.getElementById("themeToggle");
themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  themeBtn.textContent = document.body.classList.contains("dark") ? "🌙" : "🌞";
});

// Motion toggle
const motionBtn = document.getElementById("motionToggle");
motionBtn.addEventListener("click", () => {
  document.body.classList.toggle("reduced-motion");
  motionBtn.textContent = document.body.classList.contains("reduced-motion") 
    ? "Motion: On" 
    : "Motion: Off";
});
