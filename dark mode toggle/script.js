const inputE1 = document.querySelector(".input");
const bodyE1 = document.getElementsByTagName('body')[0];
// console.log(bodyE1)

inputE1.checked = JSON.parse( localStorage.getItem('mode'));
updateBody();
function updateBody(){
    if(inputE1.checked){
        bodyE1.style.background = 'black'
    }
    else{
        bodyE1.style.background = 'white'
    }
}
function updateLocalstorage(){
    localStorage.setItem('mode', JSON.stringify(inputE1.checked));
}

inputE1.addEventListener('input', function(){
    updateBody();
    updateLocalstorage();
})