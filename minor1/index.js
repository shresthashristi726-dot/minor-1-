        // Get the dark mode toggle button
        const darkModeToggle = document.getElementById('darkModeToggle');
        // Get the body element
        const body = document.body;

        // Function to set the theme
        function setTheme(isDark) {
            if (isDark) {
                body.classList.add('dark');
                localStorage.setItem('theme', 'dark');
            } else {
                body.classList.remove('dark');
                localStorage.setItem('theme', 'light');
            }
        

        // Check for saved theme preference on page load
        document.addEventListener('DOMContentLoaded', () => {
            const savedTheme = localStorage.getItem('theme');
            if (savedTheme === 'dark') {
                setTheme(true);
            } else {
                // Default to light mode if no preference or 'light' is saved
                setTheme(false);
            }
        });

        // Add event listener to the button
        darkModeToggle.addEventListener('click', () => {
            // Toggle the 'dark' class on the body
            const isCurrentlyDark = body.classList.contains('dark');
            setTheme(!isCurrentlyDark);
        });
      }
