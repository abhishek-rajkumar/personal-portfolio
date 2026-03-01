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

var typed = new Typed(".auto-type", {
    strings: ["Web Developer", "YouTuber.", "UI Designer."],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
})

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

const boxes = document.querySelectorAll('.service-first-box, .client-box');

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


// What I Do inner section arrow section 3rd container
document.querySelectorAll('.service-element-icon').forEach((btn, index) => {
    btn.addEventListener('click', () => {
        const cards = document.querySelectorAll('.service-first-box');
        const nextCard = cards[index + 1] || cards[0];

        if (nextCard) {
            nextCard.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });
        }
    });
});



// Select all work experience cards
const experienceCards = document.querySelectorAll('.work-exp-inner-content, .work-exp-inner-second-content');

// Create the Intersection Observer
const cardObserver = new IntersectionObserver((observedEntries) => {
    observedEntries.forEach(observedEntry => {
        if (observedEntry.isIntersecting) {
            observedEntry.target.classList.add('active'); // add animation class
        } else {
            observedEntry.target.classList.remove('active'); // optional: remove if you want re-animation
        }
    });
}, {
    threshold: 0.5 // triggers when 50% of the element is visible
});

// Observe each card
experienceCards.forEach(experienceCard => cardObserver.observe(experienceCard));
