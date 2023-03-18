
function word_counter() {
    let response = document.getElementById('input-text').value;
    let text_trim = response.replace(/\s/g, '');
    let text_length = text_trim.length;
    console.log(text_length)
    document.getElementById('total-ch').innerHTML = text_length;
    document.getElementById('remaining-ch').innerHTML = 50 - text_length;
    if (text_length == 50) {
        document.getElementById('remaining-ch').innerHTML = 'you exceed word limit';
        document.getElementById('input-text').disabled = true;
        clearTimeout(time_id);
    }
    let time_id = setTimeout(function () {
        word_counter();
    }, 500);

}
word_counter();
