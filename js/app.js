const button = document.querySelector('.js-light-mode')

button.addEventListener('click', () => {
 document.documentElement.classList.toggle('light-mode');
});