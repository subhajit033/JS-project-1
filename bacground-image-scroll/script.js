const bgImageE1 = document.getElementById('bg-image');
window.addEventListener('scroll', function () {
    updateImage();
})
function updateImage() {
    bgImageE1.style.opacity = 1 - window.pageYOffset / 900;
    console.log(window.pageYOffset);
}