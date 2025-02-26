// Scrolls animation
function smoothScrollTo(targetY, duration = 1000) { // duration in milliseconds
    const startY = window.scrollY;
    const distance = targetY - startY;
    let startTime = null;

    function animationStep(timestamp) {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1); // Normalize progress (0 to 1)

        const easeInOutQuad = progress < 0.5
            ? 2 * progress * progress
            : 1 - Math.pow(-2 * progress + 2, 2) / 2; // Ease-in-out function

        window.scrollTo(0, startY + distance * easeInOutQuad);

        if (progress < 1) {
            requestAnimationFrame(animationStep);
        }
    }

    requestAnimationFrame(animationStep);
}

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
        fadingDot.style.color = "#0F0F0F";
        fadingDot.style.lineHeight = "3rem";
        fadingDot.style.transition = "all 0.4s";
    });

    document.querySelectorAll("#ham").forEach(ham => {
        ham.style.letterSpacing = "8vw";
        ham.style.transform = "translateX(4vw)";
        ham.style.transition = "all 0.7s";
    });
});
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
        fadingDot.style.color = "";
        fadingDot.style.lineHeight = "";
    });

    document.querySelectorAll("#ham").forEach(ham => {
        ham.style.letterSpacing = "";
        ham.style.transform = "";
    });
});

// Scrolls to Hero section
document.querySelectorAll('a[href^="#name"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();

        const targetID = this.getAttribute("href");
        const targetElement = document.querySelector(targetID);

        if (targetElement) {
            smoothScrollTo(targetElement.offsetTop - 400);
        }
    });
});

// Scrolls to Experience section
document.querySelectorAll('a[href^="#experience"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();

        const targetID = this.getAttribute("href");
        const targetElement = document.querySelector(targetID);

        if (targetElement) {
            smoothScrollTo(targetElement.offsetTop + 125);
        }
    });
});

// Scrolls to Projects section
document.querySelectorAll('a[href^="#projects"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();

        const targetID = this.getAttribute("href");
        const targetElement = document.querySelector(targetID);

        if (targetElement) {
            smoothScrollTo(targetElement.offsetTop + 125);
        }
    });
});

// Scrolls to About section
document.querySelectorAll('a[href^="#about"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();

        const targetID = this.getAttribute("href");
        const targetElement = document.querySelector(targetID);

        if (targetElement) {
            smoothScrollTo(targetElement.offsetTop + 100);
        }
    });
});

// Changes active section in the navbar
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".section");
    const navLinks = document.querySelectorAll(".nav-link");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    let activeSection = entry.target.id;
                    navLinks.forEach(link => {
                        link.classList.toggle("active", link.getAttribute("href") === `#${activeSection}`);
                    });
                }
            });
        },
        {threshold: 0.5} // Adjust how much of the section should be visible before activating
    );

    sections.forEach(section => observer.observe(section));
});

// The on-load effect
window.addEventListener("load", () => {
    document.querySelector(".main").classList.add("after");

    function blockEvents(e) {
        if (window.innerWidth <= 800 && e.type !== "load") {
            e.stopImmediatePropagation(); // Prevents all other listeners from running
        }
    }

    // List of common event types to block
    const eventsToBlock = ["mouseenter", "mouseleave"];

    // Attach the blocker to all these events
    eventsToBlock.forEach(event => {
        window.addEventListener(event, blockEvents, true);
    });
});

