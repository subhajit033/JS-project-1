let btnE1 = document.querySelectorAll('.btn')[0];
let btnE2 = document.querySelectorAll('.btn')[1];
let btnE3 = document.querySelectorAll('.btn')[2];
let contentE1 = document.querySelectorAll('.content')[0];
let contentE2 = document.querySelectorAll('.content')[1];
let contentE3 = document.querySelectorAll('.content')[2];
let image = document.getElementById('img');
btnE1.addEventListener('click', function () {
    contentE1.classList.add('live');
    btnE1.classList.add('live');
    contentE2.classList.remove('live');
    btnE2.classList.remove('live')
    contentE3.classList.remove('live');
    btnE3.classList.remove('live');
    image.src = 'https://images.unsplash.com/photo-1678876403327-13ac6aa6e8aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
    
})
btnE2.addEventListener('click', function () {
    contentE2.classList.add('live');
    btnE2.classList.add('live');
    contentE1.classList.remove('live');
    btnE1.classList.remove('live')
    contentE3.classList.remove('live');
    btnE3.classList.remove('live');
    image.src = 'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
})
btnE3.addEventListener('click', function () {
    contentE3.classList.add('live');
    btnE3.classList.add('live');
    contentE2.classList.remove('live');
    btnE2.classList.remove('live')
    image.src = 'https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
})