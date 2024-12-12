// Add interactive functionality if needed
document.addEventListener("DOMContentLoaded", () => {
    console.log("Website FixTech Ready!");
});

const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

/* about.html */
document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");

    // Toggle navigation on small screens
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

    // Redirect to About page when 'About' button is clicked
    const aboutLink = document.querySelector("a[href='about.html']");
    aboutLink.addEventListener("click", (event) => {
        event.preventDefault(); // Prevent default navigation
        window.location.href = "about.html"; // Redirect to About page
    });
});


