document.querySelector('.btn').addEventListener('click', function(){
    document.querySelector('.popup-container').classList.remove('hidden')
    document.querySelector('.container').classList.add('blur')
    document.querySelector('.popup-container').classList.add('bounce-in-top')
})
document.querySelector('.close-icon').addEventListener('click', function(){
    document.querySelector('.popup-container').classList.add('hidden')
    document.querySelector('.container').classList.remove('blur')
    document.querySelector('.popup-container').classList.remove('bounce-in-top')
})