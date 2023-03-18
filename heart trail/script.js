let bodyE1 = document.querySelector('body');
bodyE1.addEventListener('mousemove', function (event) {
    let xPos = event.offsetX;
    let yPos = event.offsetY;
    let spanE1 = document.createElement('span');
    spanE1.style.left = xPos + 'px';
    spanE1.style.top = yPos + 'px';
    bodyE1.appendChild(spanE1);
    //creating a random number
    let size = Math.round(Math.random() * 80);
    console.log(size)
    spanE1.style.width = size + 'px';
    spanE1.style.height = size + 'px';
    setTimeout(() => {
        spanE1.remove();
    }, 2000);
})