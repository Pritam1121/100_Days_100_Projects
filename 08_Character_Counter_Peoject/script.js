
const textInput = document.getElementById('textInput');
const charCount = document.getElementById('charCount');
const limitMessage = document.getElementById('limitMessage');
const wordCount = document.getElementById('wordCount');

const limit = 200;

textInput.addEventListener('input', updateCount)

function updateCount() {    
    const countChar = textInput.value.length;
    charCount.innerText = `${countChar} / ${limit} Characters...!`
    
    // const spaceExpression = /\s+/g ;
    // const spaceCount = textInput.value.match(spaceExpression).length;
    // console.log(spaceCount);

    if (countChar < limit) {
        charCount.style.color = 'green';
        limitMessage.innerText = ``;
    } else if (countChar < 300) {
        charCount.style.color = 'orange';
        limitMessage.innerText = `Limit is the exceed`;
        limitMessage.style.color = 'orange';
    }
    else {
        charCount.style.color = 'red';
        limitMessage.innerText = `Limit is the excceded and this is the over 300`;
        limitMessage.style.color = 'red';
    }
}  