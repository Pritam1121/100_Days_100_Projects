

const dieImage = document.getElementById('dieImage');
const changedie = document.getElementById('changedie');
const dieResult = document.getElementById('dieResult');

changedie.addEventListener('click',changedierandom)

function changedierandom(){
    const dieall = ['\u2680','\u2681','\u2682','\u2683','\u2684','\u2685',]

    const randomNumber = Math.floor(Math.random() * 6) + 1;

    dieImage.innerText = dieall[randomNumber - 1]

    dieResult.innerText = `The die number is the ${randomNumber}`

}
