import { getFromLS, addToLS, removeFromLS } from './local-storage-functions';

const toggleSwitch = document.getElementById('toggle');
const switchSlider = document.querySelector('.switch-slider');
const labelHeader = document.querySelector('.label-header');
const root = document.querySelector(':root');

toggleSwitch.addEventListener('change', onToggleChange);

function onToggleChange() {
  if (toggleSwitch.checked) {
    root.classList.add('dark-theme');
    switchSlider.classList.add('active');
    labelHeader.style.background =
      'linear-gradient(180deg, #4f2ee8 0%, #686868 100%)';
    addToLS('theme', 'dark');
  } else {
    root.classList.remove('dark-theme');
    switchSlider.classList.remove('active');
    labelHeader.style.background =
      'linear-gradient(180deg, #4f2ee8 0%, #fff 100%)';
    removeFromLS('theme');
  }
}

function colorTheme() {
  const localUserTheme = getFromLS('theme');
  if (localUserTheme) {
    root.classList.add('dark-theme');
    switchSlider.classList.add('active');
    labelHeader.style.background =
      'linear-gradient(180deg, #4f2ee8 0%, #686868 100%)';
    toggleSwitch.checked = true;
  }
}

colorTheme();
