// =========================
// Modal Popup
// =========================
const modal = document.getElementById("imageModal");
const modalImg = document.querySelector("#imageModal img");
const closeBtn = document.querySelector("#imageModal .close");

document.querySelectorAll(".grid img").forEach(img => {
  img.addEventListener("click", () => {
    if (motionEnabled) {
      modal.style.display = "block";
      modalImg.src = img.src;
    } else {
      // No motion mode: just show immediately
      modal.style.display = "block";
      modalImg.src = img.src;
    }
  });
});

// Close with X button
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// Close with Escape key
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    modal.style.display = "none";
  }
});

// =========================
// Theme Toggle
// =========================
const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    themeToggle.textContent = "☀️ Light Mode";
  } else {
    themeToggle.textContent = "🌙 Dark Mode";
  }
});

// =========================
// Motion Toggle
// =========================
let motionEnabled = true;
const motionToggle = document.getElementById("motionToggle");

motionToggle.addEventListener("click", () => {
  motionEnabled = !motionEnabled;

  if (motionEnabled) {
    motionToggle.textContent = "🌀 Motion: On";
    document.documentElement.style.scrollBehavior = "smooth";
  } else {
    motionToggle.textContent = "🛑 Motion: Off";
    document.documentElement.style.scrollBehavior = "auto";
  }
});
