// script.js
let header = document.querySelector("header");
let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector("#nav-menu");

// Add shadow to header on scroll
window.addEventListener("scroll", () => {
    header.classList.toggle("shadow", window.scrollY > 0);
});

// Toggle mobile navigation menu
menu.onclick = () => {
    navbar.classList.toggle("active");
};

// Close mobile navigation menu when scrolling
window.onscroll = () => {
    navbar.classList.remove("active");
};

// Dark Mode / Light Mode Toggle
let darkmode = document.querySelector("#darkmode");

darkmode.onclick = () => {
    if (darkmode.classList.contains("bx-moon")) {
        // Switch to sun icon and activate dark mode styles
        darkmode.classList.replace("bx-moon", "bx-sun");
        document.body.classList.add("active");
    } else {
        // Switch back to moon icon and deactivate dark mode styles
        darkmode.classList.replace("bx-sun", "bx-moon");
        document.body.classList.remove("active");
    }
};

// Initialize Typed.js for the hero section's animated text
// This targets the span with id="element" inside the new hero section
var typed = new Typed('#element', {
    strings: ['a Passionate AI & ML Engineer.', 'an LLM Developer.', 'a Prompt Engineer', 'a Java Backend Developer'],
    typeSpeed: 70,
    backSpeed: 50,
    loop: true
});

// Consolidated Resume button event for all buttons with class 'resume-button'
// This ensures both the navbar resume button and the hero section resume button work.
const resumeLink = "./Resume/Sonu-Kumar-Resume-AI.pdf"; // Path to your resume file

document.querySelectorAll('.resume-button').forEach(button => {
    button.addEventListener("click", () => {
        // Opens the resume link in a new tab
        window.open(resumeLink, "_blank");
    });
});
