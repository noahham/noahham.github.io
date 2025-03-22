// Smoothly scrolls to a given section
function smoothScrollTo(targetY, duration = 1000) { // duration in milliseconds
    const startY = window.scrollY;

    const mediaQuery = window.matchMedia("(max-width: 800px) and (orientation: portrait)");
    const offset = mediaQuery.matches ? 50 : 0; // Apply offset only for the media query

    const distance = targetY - startY - offset;
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