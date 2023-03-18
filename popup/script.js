let btnE1 = document.querySelector('.btn');
let popUpE1 = document.querySelector('.popup');
let cutE1 = document.querySelector('.cross');
btnE1.addEventListener('click', function () {
    popUpE1.classList.remove('hidden');
    popUpE1.classList.add('slide-in-right');
    popUpE1.classList.remove('slide-out-right');
    setTimeout(() => {
        cutE1.classList.remove('hidden');
    }, 2000);
    setTimeout(() => {
        popUpE1.classList.remove('slide-in-right');
        popUpE1.classList.add('slide-out-right');
        cutE1.classList.add('hidden');
    }, 5500);
})
// cutE1.addEventListener('click', function(){
//     // popUpE1.classList.add('hidden');
//     popUpE1.classList.remove('slide-in-right');
//     popUpE1.classList.add('slide-out-right');
// })