// ========================= PORTFOLIO MAIN PAGE JS ========================= //
// This file must contain ONLY JavaScript. No CSS or HTML.

// ========================= CHRONO TILE CLICK ========================= //
const chronoTile = document.querySelector('.chrono-tile');
if (chronoTile) {
    chronoTile.addEventListener('click', () => {
        window.location.href = "chrono.html";
    });
    chronoTile.style.cursor = 'pointer';
}

// ========================= GSAP ANIMATIONS ========================= //
if (typeof gsap !== "undefined") {

    gsap.registerPlugin(ScrollTrigger);

    // FUN CARDS
    gsap.from(".fun-card", {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".fun-section",
            start: "top 90%",
            toggleActions: "play none none none"
        }
    });
gsap.from(".hero-text", {
    opacity: 0,
    y: 40,
    duration: 1.2,
    ease: "power3.out",
});

gsap.from(".hero-photo-blowout", {
    opacity: 0,
    scale: 0.9,
    duration: 1.4,
    ease: "power3.out",
});

    // FEATURED SKILLS – Fade in
    gsap.from(".skill-shape", {
        opacity: 0,
        scale: 0.8,
        duration: 0.8,
        stagger: 0.1,
        ease: "back.out(1.7)",
        scrollTrigger: {
            trigger: ".skills-section",
            start: "top 85%",
            toggleActions: "play none none none"
        }
    });

    // CLICK BOUNCE EFFECT
    document.querySelectorAll(".skill-shape").forEach(shape => {
        shape.addEventListener("click", () => {
            gsap.to(shape, {
                y: "-=15",
                duration: 0.4,
                ease: "elastic.out(1,0.4)"
            });
        });
    });

    // FLOATING ANIMATION
    gsap.to(".skill-shape", {
        y: "+=10",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        duration: 2,
        stagger: 0.2
    });

    // CLICK WIGGLE EFFECT
    document.querySelectorAll(".skill-shape").forEach(shape => {
        shape.addEventListener("click", () => {
            gsap.to(shape, {
                rotation: "+=20",
                scale: 1.15,
                duration: 0.4,
                ease: "elastic.out(1,0.3)"
            });
        });
    });

    // LOGO BUBBLES FLOAT
    gsap.to(".logo-bubbles .bubble", {
        y: "+=6",
        repeat: -1,
        yoyo: true,
        duration: 1.6,
        ease: "sine.inOut",
        stagger: 0.2
    });
}

// ========================= EXPANDABLE CARDS ========================= //
document.querySelectorAll("[data-expand]").forEach(card => {
    card.addEventListener("click", () => {
        card.classList.toggle("expanded");
    });
});
