// Hero hover animations
document.querySelector("#name").addEventListener("mouseenter", () => {
    document.querySelectorAll(".hero-title").forEach(heroTitle => {
        heroTitle.style.color = "white";
        heroTitle.style.letterSpacing = "8vw";
        heroTitle.style.lineHeight = "6rem"
        heroTitle.style.transition = "all 0.7s";
    });

    document.querySelectorAll(".dot").forEach(dot => {
        dot.style.color = "white";
        dot.style.transition = "all 0.7s";
    });

    document.querySelectorAll(".fading-dot").forEach(fadingDot => {
        fadingDot.style.opacity = "0";
        fadingDot.style.lineHeight = "3rem";
        fadingDot.style.transition = "all 0.4s";
    });

    document.querySelectorAll("#ham").forEach(ham => {
        ham.style.letterSpacing = "8vw";
        ham.style.transform = "translateX(4vw)";
        ham.style.transition = "all 0.7s";
    });
});

// Reset hero hover animations
document.querySelector("#name").addEventListener("mouseleave", () => {
    document.querySelectorAll(".hero-title").forEach(heroTitle => {
        heroTitle.style.color = "";
        heroTitle.style.letterSpacing = "";
        heroTitle.style.lineHeight = "";
    });

    document.querySelectorAll(".dot").forEach(dot => {
        dot.style.color = "";
    });

    document.querySelectorAll(".fading-dot").forEach(fadingDot => {
        fadingDot.style.opacity = "";
        fadingDot.style.lineHeight = "";
    });

    document.querySelectorAll("#ham").forEach(ham => {
        ham.style.letterSpacing = "";
        ham.style.transform = "";
    });
});
