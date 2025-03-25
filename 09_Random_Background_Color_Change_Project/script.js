const changeColor = document.getElementById('changeColor');
const colorcode = document.getElementById('colorcode');
const buttonMessage =document.getElementById('buttonMessage');

changeColor.addEventListener('click',randomColor)

function randomColor(){

    // RGB
    // R: red
    // G: Green
    // B: Blue

    const red = Math.floor(Math.random()*256);
    const green = Math.floor(Math.random()*256);
    const blue = Math.floor(Math.random()*256);

    const colorCode = `rgb(${red},${green},${blue})`
    document.body.style.backgroundColor = colorCode;

    // Create the reverse code
    const reverseColor = `rgb(${green},${blue},${red})`
    changeColor.style.backgroundColor = reverseColor;
    colorcode.innerText = `body background color code: ${colorCode}`;
    buttonMessage.innerText = `button background color code: ${reverseColor}`;
}
