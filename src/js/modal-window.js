document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.getElementById("menuBtn");
    const closeBtn = document.getElementById("closeBtn");
    const modalBackdrop = document.getElementById("modalBackdrop");

    menuBtn.addEventListener("click", toggleMenu);
    closeBtn.addEventListener("click", toggleMenu);

    function toggleMenu() {
        if (modalBackdrop.style.display === 'flex') {
            closeModal();
        } else {
            openModal();
        }
        toggleButtons();
    }

    function openModal() {
        modalBackdrop.style.display = 'flex';
        setTimeout(() => {
            modalBackdrop.style.opacity = 1;
            modalBackdrop.style.transform = 'translateY(0)';
        }, 10);
    }

    function closeModal() {
        modalBackdrop.style.opacity = 0;
        modalBackdrop.style.transform = 'translateY(20px)';
        setTimeout(() => {
            modalBackdrop.style.display = 'none';
        }, 300);
    }

    function toggleButtons() {
        menuBtn.classList.toggle("is-open");
        closeBtn.classList.toggle("is-open");
    }

    modalBackdrop.addEventListener("click", function (event) {
        if (event.target === modalBackdrop) {
            closeModal();
            toggleButtons();
        }
    });
});