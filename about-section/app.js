const navMenu = document.querySelector(".nav-menu");
const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");
navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");

}

// Progress Bar
document.addEventListener("DOMContentLoaded", () => {
    const progressBars = document.querySelectorAll(".progress-bar");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bar = entry.target;
                const value = bar.getAttribute("data-progress");
                bar.style.width = value + "%";
                observer.unobserve(bar); // run only once
            }
        });
    }, { threshold: 0.5 });

    progressBars.forEach(bar => observer.observe(bar));
});

// Progress Bar End

const boxes = document.querySelectorAll('.client-box');

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        } else {
            entry.target.classList.remove('active'); // optional
        }
    });
}, {
    threshold: 0.5 // 50% visible
});

boxes.forEach(box => observer.observe(box));