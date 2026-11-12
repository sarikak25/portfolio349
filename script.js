document.addEventListener('DOMContentLoaded', () => {
    // Light / Dark Mode Toggle 
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const siteLogo = document.getElementById('site-logo');

    // Load saved theme or default to light
    const currentTheme = localStorage.getItem('portfolio-theme') || 'light';
    if (currentTheme === 'dark') {
        document.body.setAttribute('data-theme', 'dark');
        updateIcon('dark');
        if (siteLogo) siteLogo.src = 'images/logo-light.png';
    }

    // Toggle on click
    themeToggleBtn.addEventListener('click', () => {
        let theme = document.body.getAttribute('data-theme');
        if (theme === 'dark') {
            document.body.removeAttribute('data-theme');
            localStorage.setItem('portfolio-theme', 'light');
            updateIcon('light');
            if (siteLogo) siteLogo.src = 'images/logo-dark.png';
        } else {
            document.body.setAttribute('data-theme', 'dark');
            localStorage.setItem('portfolio-theme', 'dark');
            updateIcon('dark');
            if (siteLogo) siteLogo.src = 'images/logo-light.png';
        }
    });

    function updateIcon(theme) {
        if (theme === 'dark') {
            themeIcon.innerHTML = `<path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;
            themeToggleBtn.setAttribute('aria-label', 'Switch to light mode');
        } else {
            themeIcon.innerHTML = `<path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>`;
            themeToggleBtn.setAttribute('aria-label', 'Switch to dark mode');
        }
    }

    // ScrollReveal.js Library
    if (typeof ScrollReveal !== 'undefined') {
        const sr = ScrollReveal({
            origin: 'bottom',
            distance: '30px',
            duration: 800,
            delay: 150,
            reset: false
        });

        sr.reveal('.hero-card', { delay: 200 });
        sr.reveal('#about h2, #about .about-grid', { interval: 150 });
        sr.reveal('#projects h2, .projects-grid .card', { interval: 200 });
        sr.reveal('#contact', { delay: 150 });
    }
});