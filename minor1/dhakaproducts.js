document.addEventListener('DOMContentLoaded', () => {
    const productModal = document.getElementById('product-modal');
       
    productModal.addEventListener('click', (event) => {
        if (event.target === productModal) {
            productModal.style.display = 'none';
        }
    });
    
    const imagePopupModal = document.createElement('div');
    imagePopupModal.className = 'image-popup-modal';
    imagePopupModal.innerHTML = `
        <div class="image-popup-content">
            <img id="popup-image" src="" alt="Enlarged Product Image">
            <span class="image-popup-close">&times;</span>
        </div>
    `;
    document.body.appendChild(imagePopupModal);
    const popupImage = document.getElementById('popup-image');
    const imagePopupClose = imagePopupModal.querySelector('.image-popup-close');

    document.getElementById('product-list').addEventListener('click', (event) => {
        if (event.target.tagName === 'IMG' && event.target.closest('.product-card')) {
            popupImage.src = event.target.src;
            popupImage.alt = event.target.alt;
            imagePopupModal.style.display = 'flex';
        }
    });

    imagePopupClose.addEventListener('click', () => {
        imagePopupModal.style.display = 'none';
    });
    imagePopupModal.addEventListener('click', (event) => {
        if (event.target === imagePopupModal) {
            imagePopupModal.style.display = 'none';
        }
    });
});
        // Get the dark mode toggle button
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
            body.classList.remove('dark-mode');
            localStorage.setItem('darkMode', 'disabled');
            darkModeToggle.textContent = 'Dark Mode';
        } else {
            body.classList.add('dark-mode');
            localStorage.setItem('darkMode', 'enabled');
            darkModeToggle.textContent = 'Light Mode';
        }
    });
});