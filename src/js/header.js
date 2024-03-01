const toggleSwitch = document.getElementById('toggle');
        const switchSlider = document.querySelector('.switch-slider');
        const labelHeader = document.querySelector('.label-header');

        toggleSwitch.addEventListener('change', function () {
            switchSlider.classList.toggle('active');
            labelHeader.style.background = this.checked ? 'linear-gradient(180deg, #4f2ee8 0%, #686868 100%)' : 'linear-gradient(180deg, #4f2ee8 0%, #fff 100%)';
        });