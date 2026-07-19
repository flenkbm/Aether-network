// Function to toggle between light and dark mode
function toggleTheme() {
  document.body.classList.toggle('dark-mode');
  let toggler = document.getElementById("theme-toggler");
  if (document.body.classList.contains('dark-mode')) {
    saveTheme('dark');
    toggler.setAttribute("src", "img/theme-toggler-dark.png");
  } else {
    saveTheme('light');
    toggler.setAttribute("src", "img/theme-toggler-light.png");
  }
}
// Load theme from localStorage on page load
function loadTheme() {
  if (localStorage.getItem('Aether-theme') === 'light') {
    toggleTheme();
    // Can be used because the basic theme is dark
  }
}
// Save theme to localStorage when toggled
function saveTheme(theme) {
  localStorage.setItem('Aether-theme', theme);
}
// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
  loadTheme();
});