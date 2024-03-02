let calcScrollValue = () => {
    let scrollProgress = document.querySelector(".progress");
    let progressValue = document.querySelector(".progress-value");
    let pos = document.documentElement.scrollTop
    let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    if (pos > 100) {
        scrollProgress.style.display = "grid";
    } else {
        scrollProgress.style.display = "none";
    }
    scrollProgress.addEventListener("click", () => {
        document.documentElement.scrollTop = 0;
    });

};

window.addEventListener('scroll', calcScrollValue);
window.addEventListener('load', calcScrollValue);



