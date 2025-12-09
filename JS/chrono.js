// CLICK-TO-ZOOM LIGHTBOX
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".lightbox-close");

// Click Chrono image -> open lightbox
document.querySelectorAll(".chrono-img").forEach(img => {
    img.addEventListener("click", () => {
        lightbox.style.display = "flex";
        lightboxImg.src = img.src;
    });
});

// Close popup when clicking X
closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
});

// Close when clicking outside the image
lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = "none";
    }
});
