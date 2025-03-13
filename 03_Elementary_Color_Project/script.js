
// all ID featch in a JS

const colorInput = document.getElementById('colorInput');
const colorCode = document.getElementById('colorCode');
const copyButton = document.getElementById('copyButton');

const complementoryContanier = document.getElementById('complementoryContanier');
const saveColorbtn = document.getElementById('saveColorbtn');
const favoriteContainer = document.getElementById('favoriteContainer');     

colorInput.addEventListener('input',()=>{
   const setColor = colorInput.value;
//    console.log(setColor)
updateDisplay(setColor);
showComplementory(setColor);
})

function showComplementory(color){
    const complimentColors = getComplementory(color);
    complementoryContanier.innerHTML = "" // clear privious Color

    
    complimentColors.forEach((compColor)=>{
        const colorBox = document.createElement('div')
        colorBox.classList.add('color-box');
        colorBox.style.backgroundColor = compColor

        complementoryContanier.appendChild(colorBox)
    })
}

function getComplementory(color){
    const base = parseInt(color.slice(1),16);
    const compliment = (0xFFFFFF ^ base).toString(16).padStart(6,'0');
    return [`#${compliment}`] 
}

function updateDisplay(color){
    colorCode.textContent = color;
    colorCode.style.color = color; 
}

copyButton.addEventListener('click',()=>{
  navigator.clipboard.writeText(colorCode.textContent)
    .then(()=>alert(`Copied color code...!`))
    .catch(err => console.log('failed to copy', err))
})

saveColorbtn.addEventListener('click',()=>{
    const color = colorCode.textContent;
    favoriteColor(color)
}) 

function favoriteColor(color){
    const colorBox = document.createElement('div')
    colorBox.classList.add('color-box')
    colorBox.style.backgroundColor = color;
    colorBox.style.title = color;
    favoriteContainer.appendChild(colorBox)
}
