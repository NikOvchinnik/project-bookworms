
// const showLoader = () => {
//     const loader = document.createElement('span');
//     loader.classList.add('loader');
//     document.body.append(loader);
// };

// const hideLoader = () => {
//     const loader = document.querySelector('.loader');
//     if (loader) {
//         loader.remove();
//     }
// };



window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");
    loader.classList.add("loader-hidden");

    loader.addEventListener("transitioned", () => {
        document.body.removeChild("loader");
    })
})