let navbarE1 = document.querySelector('.navbar');
let bottomContainerE1 = document.querySelector('.bottom-container')
console.log(bottomContainerE1.offsetTop)
//navbar height = 74
window.addEventListener('scroll', function () {
    if
        (window.scrollY > bottomContainerE1.offsetTop - navbarE1.offsetHeight - 50) {
            navbarE1.classList.add('active');
    }
    else{
        navbarE1.classList.remove('active');
    }
    // console.log(window.scrollY);
    //scrollY - 360
})