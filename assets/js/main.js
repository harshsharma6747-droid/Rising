/* ---
   Rising Star Academy - Main JavaScript
   --- */

document.addEventListener("DOMContentLoaded", () => {

    // --- 1. Sticky Navbar & Mobile Nav Toggle ---
    const header = document.querySelector('.header');
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    // Sticky Navbar
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.boxShadow = 'var(--box-shadow)';
        }
    });

    // Mobile Nav Toggle
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            // Toggle icon (e.g., hamburger to 'x')
            navToggle.innerHTML = navMenu.classList.contains('active') 
                ? '<i class="fas fa-times"></i>' 
                : '<i class="fas fa-bars"></i>';
        });
    }

    // Close mobile menu when a link is clicked
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                navToggle.innerHTML = '<i class="fas fa-bars"></i>';
            }
        });
    });

    // --- 2. Dark Mode Toggle ---
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    
    // Check for saved user preference in localStorage
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
        if (darkModeToggle) darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
        if (darkModeToggle) darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    }

    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            
            // Save preference to localStorage
            if (document.body.classList.contains('dark-mode')) {
                localStorage.setItem('theme', 'dark');
                darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
            } else {
                localStorage.setItem('theme', 'light');
                darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
            }
        });
    }

    // --- 3. Scroll Fade-in Animations ---
    const fadeElements = document.querySelectorAll('.fade-in');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1 // Trigger when 10% of the element is visible
    });

    fadeElements.forEach(el => {
        observer.observe(el);
    });

    // --- 4. Set Active Nav Link ---
    // This highlights the nav link of the current page
    const currentPage = window.location.pathname.split('/').pop();
    if (currentPage === "" || currentPage === "index.html") {
        document.querySelector('a[href="index.html"]')?.classList.add('active');
    } else {
        document.querySelector(`a[href="${currentPage}"]`)?.classList.add('active');
    }

});

// --- 5. Form Validation Helper (Basic) ---
function validateForm(form) {
    let isValid = true;
    const inputs = form.querySelectorAll('input[required], textarea[required], select[required]');
    
    inputs.forEach(input => {
        if (!input.value.trim()) {
            isValid = false;
            input.style.borderColor = 'red';
            // You could add a small error message element here
        } else {
            input.style.borderColor = 'var(--color-border)';
        }
    });
    
    return isValid;
}

// Make it globally accessible for form scripts
window.validateForm = validateForm;
