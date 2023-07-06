const toggleButton=document.querySelector('.js-light-mode-toggle');
const body = document.querySelector('body');

toggleButton.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    body.classList.toggle('dark-mode');
})