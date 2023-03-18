function imageSlider() {
    let container = document.querySelector('.image-container');
    let slide_width = 0;
    //set Interval means lopp with a timing function
    setInterval(() => {
        slide_width = slide_width - 500;
        console.log(`inside Inter val ${slide_width}`)
        container.style.transform = `translateX(${slide_width}px)`;
        if (slide_width == -7000) {
            container.style.transform = 'translateX(0)';

            slide_width = 0;
        }

    }, 3000);

}
imageSlider();
let container = document.querySelector('.image-container');
let width = 0;
document.querySelector(".prev").addEventListener('click', function () {
    width = width + 500;
    container.style.transform = `translateX(${width}px)`;
    document.querySelector(".prev").style.transform = 'translateX(-7px)';
    setTimeout(() => {
        document.querySelector(".prev").style.transform = 'translateX(0)'
    }, 100);


})
document.querySelector(".next").addEventListener('click', function () {
    width = width - 500;
    container.style.transform = `translateX(${width}px)`;
    document.querySelector(".next").style.transform = 'translateX(7px)';
    setTimeout(() => {
        document.querySelector(".next").style.transform = 'translateX(0)'
    }, 100);
})
