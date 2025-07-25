document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;

    // Check for user's preferred mode from localStorage
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode === 'enabled') {
        body.classList.add('dark-mode');
        darkModeToggle.textContent = 'Light Mode';
    } else {
        darkModeToggle.textContent = 'Dark Mode';
    }

    darkModeToggle.addEventListener('click', () => {
        if (body.classList.contains('dark-mode')) {
            // If currently in dark mode, switch to light mode
            body.classList.remove('dark-mode');
            localStorage.setItem('darkMode', 'disabled'); // Save preference
            darkModeToggle.textContent = 'Dark Mode';
        } else {
            // If currently in light mode, switch to dark mode
            body.classList.add('dark-mode');
            localStorage.setItem('darkMode', 'enabled'); // Save preference
            darkModeToggle.textContent = 'Light Mode';
        }
    });
});