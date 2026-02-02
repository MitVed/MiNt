/**
 * Optimized Splitting & Animation Trigger
 */

// 1. SPLIT TEXT INTO SPANS (Optimized)
const splitElements = document.querySelectorAll('[data-split]');

splitElements.forEach(el => {
    const text = el.innerText;
    const fragment = document.createDocumentFragment();
    el.innerHTML = ''; // Clear original text

    [...text].forEach((char, i) => {
        const span = document.createElement('span');
        span.textContent = char;
        // Use a 60ms stagger for a smoother "wave" flow
        span.style.setProperty('--index', i);
        fragment.appendChild(span);
    });
    
    el.appendChild(fragment);
});

// 2. INTERSECTION OBSERVER (Performance Tuned)
const observerOptions = {
    threshold: 0.3 // Trigger when 30% of the section is visible
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        } else {
            // Optional: comment out the next line if you want 
            // the animation to keep playing once started
            entry.target.classList.remove('visible');
        }
    });
}, observerOptions);

const targetSection = document.querySelector('#anniversary-section');
if (targetSection) {
    observer.observe(targetSection);
}