  document.addEventListener('DOMContentLoaded', () => {
    const popup = document.createElement('div');
    popup.id = 'simple-image-popup';
    popup.style.cssText = `
      display: none;
      position: fixed;
      top: 0; left: 0; right: 0; bottom: 0;
      background: rgba(0,0,0,0.8);
      justify-content: center;
      align-items: center;
      z-index: 9999;
    `;
    popup.innerHTML = `
      <img id="popup-img" style="max-width: 90%; max-height: 90%; border-radius: 8px;">
    `;
    document.body.appendChild(popup);

    const popupImg = document.getElementById('popup-img');

    document.getElementById('product-list').addEventListener('click', (e) => {
      if (e.target.tagName === 'IMG') {
        popupImg.src = e.target.src;
        popup.style.display = 'flex';
      }
    });

    popup.addEventListener('click', () => {
      popup.style.display = 'none';
    });
  });
        // Get the dark mode toggle button
       const toggleButton = document.getElementById('darkModeToggle');
const body = document.body;

toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
});
