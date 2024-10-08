const DEFAULT_THEME = 'east';
const STYLES_PATH = '/assets/styles';

function changeTheme() {
  const appliedTheme = document.querySelector('#applied-theme');
  const themeLink = document.querySelector('#theme');

  const currentTheme = localStorage.getItem('theme') ?? DEFAULT_THEME;
  appliedTheme.textContent = `${currentTheme}.css`;
  themeLink.href = `${STYLES_PATH}/${currentTheme}.css`;

  const form = document.querySelector('#theme-form');
  const radioButtons = form.querySelectorAll('input[type="radio"]');
  radioButtons.forEach((radioButton) => {
    if (radioButton.value === currentTheme) {
      radioButton.checked = true;
    }
  });

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const newTheme = form.theme.value;
    localStorage.setItem('theme', newTheme);
    appliedTheme.textContent = `${newTheme}.css`;
    themeLink.href = `${STYLES_PATH}/${newTheme}.css`;
  });
}

changeTheme();
