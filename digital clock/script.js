let hours = document.getElementById('hours');
let minutes = document.getElementById('minutes');
let seconds = document.getElementById('seconds');
let ampm = document.getElementById('ampm');
function updateClock() {
    let time = new Date();
    let h = time.getHours();
    // console.log('hours'+ h);
    let m = time.getMinutes();
    let s = time.getSeconds();
    let am_pm = 'AM';
    if (h > 12) {
        h = h - 12;
        am_pm = 'PM';
        
    }
    if(h<12){
        h = '0' + h;
        hours.innerHTML = h;
    }
    if(s<10){
        s = '0' + s;
        seconds.innerHTML = s;
    }
    if(m<10){
        m = '0' + m;
        minutes.innerHTML = m;
    }
    console.log(h);
    hours.innerHTML = h;
    minutes.innerHTML = m;
    seconds.innerHTML = s;
    ampm.innerHTML = am_pm;
    setTimeout(() => {
        updateClock();
    }, 1000);
}
updateClock();