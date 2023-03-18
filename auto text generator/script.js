let containerE1 = document.querySelector(".container");
// let spanE1 = document.querySelector('carrier');
const careers = ['Programmer', 'Youtuber', 'Web developer', 'Freelancer', 'Instructor', 'Engineer', 'Gamer']

let careerIndex = 0;
let characterIndex = 0;
setInterval(() => {
    characterIndex++;
    containerE1.innerHTML = `
    <h1>I am ${careers[careerIndex].slice(0, 1) === 'I' || careers[careerIndex].slice(0, 1) === 'E'? 'an': 'a'} ${careers[careerIndex].slice(0, characterIndex)}</h1>   
    `
    if (characterIndex == careers[careerIndex].length) {
        careerIndex++;
        characterIndex = 0;
    }
    if (careerIndex == careers.length) {
        careerIndex = 0;
    }

}, 500)



