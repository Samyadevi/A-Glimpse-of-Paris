// Get elements
const funFactButton = document.getElementById('funFactButton');
const funFactDisplay = document.getElementById('funFactDisplay');
const sections = document.querySelectorAll('section'); // Get all <section> elements

// Fun Fact Button Logic
funFactButton.addEventListener('click', function() {
    const fact = "Fun Fact: There's actually a 'secret' apartment at the top of the Eiffel Tower, built by Gustave Eiffel himself, which is now open for public viewing on special occasions!";

    if (funFactDisplay.classList.contains('hidden')) {
        funFactDisplay.textContent = fact;
        funFactDisplay.classList.remove('hidden');
        funFactDisplay.classList.add('visible'); // Add visible class for animation
        funFactButton.textContent = 'Hide Paris Fact'; // Change button text
    } else {
        funFactDisplay.classList.remove('visible');
        funFactDisplay.classList.add('hidden'); // Hide it again
        funFactButton.textContent = 'Reveal a Paris Fact!'; // Reset button text
    }
});

// Section Fade-In on Scroll Logic
// This makes sections appear smoothly as you scroll down the page.
const observerOptions = {
    root: null, // relative to the viewport
    rootMargin: '0px',
    threshold: 0.1 // Trigger when 10% of the item is visible
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // Stop observing once it's visible
        }
    });
}, observerOptions);

// Observe each section
sections.forEach(section => {
    observer.observe(section);
});
// Initial state for the fun fact display
document.addEventListener('DOMContentLoaded', () => {
    funFactDisplay.classList.add('hidden');
});
