// let bodyE1 = document.querySelector('body');
// bodyE1.addEventListener('mousemove', function(event){
//     let xPos = event.offsetX;
//     let yPos = event.offsetY;    
//     let spanE1;
//     spanE1 = document.createElement('span');
//     spanE1.style.left = xPos + 'px';
//     spanE1.style.top = yPos + 'px';
//     bodyE1.appendChild(spanE1);
//     let size = Math.round(Math.random() * 60);
//     spanE1.style.width = size +'px';
//     spanE1.style.height = size +'px';
//     setTimeout(() => {
//         spanE1.remove();
//     }, 2000);
// })


//continuous str falling
let bodyE1 = document.querySelector('body');
setInterval(() =>{
    let xPos = Math.round(Math.random() * window.innerWidth);
    let yPos = Math.round(Math.random() * window.innerHeight);
    let size = Math.round(Math.random() * 60);
    let spanE1 = document.createElement('span');
    spanE1.style.left = xPos + 'px';
    spanE1.style.top = yPos + 'px';
    spanE1.style.width = size +'px';
    spanE1.style.height = size +'px';
    bodyE1.appendChild(spanE1);
    setTimeout(() =>{
        spanE1.remove();
    }, 2000)
    
    }, 200);
