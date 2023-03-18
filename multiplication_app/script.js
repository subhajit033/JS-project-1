function correctAnswer() {
    let a = Math.random() * 10;
    let num1 = Math.round(a);
    let b = Math.random() * 10;
    let num2 = Math.round(b);

    let first_num = document.getElementById('num1');
    let second_num = document.getElementById('num2');
    first_num.innerHTML = num1;
    second_num.innerHTML = num2;


}
let score = 0;
document.getElementById('btn').addEventListener('click', function (e) {
    let answer = document.getElementById('answer').value;
    answer = Number.parseInt(answer);
    console.log(answer);
    if (num1 * num2 === answer) {
        score += 1;
    }
    else {
        score -= 1;
    }
    document.getElementById('score').innerHTML = score;
    correctAnswer();
});