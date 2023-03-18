function randomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)]
    }
    console.log(color);
    return color;
}
function setColor(){
    let rand_col = randomColor();
    document.getElementById('color-container').style.background = rand_col;
    document.getElementById('color').innerHTML = rand_col;
}
document.getElementById('btn').addEventListener('click', function(){
    setColor();
})
