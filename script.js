function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
  icon.setAttribute("aria-expanded", menu.classList.contains("open"));
}

document.addEventListener('DOMContentLoaded', () => {
    const projectsButton = document.querySelector('.projects-button');
    projectsButton.addEventListener('click', () => {
        window.location.href = '#projects';
    });

    const cvCard = document.querySelector('.cv-card');
    cvCard.addEventListener('click', () => {
        window.open('./Asserts/CV_Daniel Oppong-Boah.pdf');
    });
});

// Smooth scroll animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, {
    threshold: 0.1
});

// Elements to animate
document.addEventListener('DOMContentLoaded', () => {
    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));
});
