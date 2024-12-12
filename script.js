// Add interactive functionality if needed
document.addEventListener("DOMContentLoaded", () => {
    console.log("Website FixTech Ready!");
});

const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});


