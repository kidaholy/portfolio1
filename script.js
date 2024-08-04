document.querySelectorAll('.toggle-button').forEach(button => {
  button.addEventListener('click', () => {
    const target = document.querySelector(button.getAttribute('data-target'));
    target.style.display = target.style.display === 'block' ? 'none' : 'block';
  });
});

document.getElementById('theme-switcher').addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
});