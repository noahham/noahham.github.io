// Adds the "after" class to main section
window.addEventListener("load", () => {
    document.querySelector("main").classList.add("after");

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