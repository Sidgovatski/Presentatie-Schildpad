document.addEventListener("DOMContentLoaded", () => {
    let scrollAmount = 600; // The amount to scroll in pixels
    let scrollDuration = 1000; // The duration of the scroll animation in milliseconds

    let isScrolling = false;
    let startTime: number;

    // Function to perform the smooth scroll animation
    function smoothScroll(timestamp: number) {
        if (!startTime) {
            startTime = timestamp;
        }

        const elapsed = timestamp - startTime;

        if (elapsed < scrollDuration) {
            const progress = elapsed / scrollDuration;
            const scrollTo = window.pageYOffset + scrollAmount * progress;
            window.scrollTo(0, scrollTo);
            requestAnimationFrame(smoothScroll);
        } else {
            window.scrollTo(0, window.pageYOffset + scrollAmount);
            isScrolling = false;
        }
    }

    // Event listener for the keydown event
    document.addEventListener("keydown", (event) => {
        // Check if the Ctrl key (or Command key on Mac) is pressed
        if (event.ctrlKey && !isScrolling) {
            isScrolling = true;
            requestAnimationFrame(smoothScroll);
            event.preventDefault(); // Prevent the default Ctrl behavior (like opening a new tab)
        }
    });
});