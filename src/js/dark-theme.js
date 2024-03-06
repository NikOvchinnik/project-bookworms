const root = document.querySelector(":root")
const toggleDarkTheme = document.querySelector('#toggle');

toggleDarkTheme.addEventListener('click', onToggleClick);

function onToggleClick(e) {
    e.preventDefault();
    root.classList.toggle('dark-theme');
}


