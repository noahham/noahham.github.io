// Smoothly scrolls to a given section
function smoothScrollTo(targetY, duration = 1000) { // duration in milliseconds
    const startY = window.scrollY;

    const mediaQuery = window.matchMedia("(max-width: 800px) and (orientation: portrait)");
    const offset = mediaQuery.matches ? 50 : 75; // Apply offset only for the media query

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