
const inpuePalindrome = document.getElementById('InputText');
const checkButton = document.getElementById('checkButton');
const palindromeResult = document.getElementById('palindromeResult');


checkButton.addEventListener('click', checkpalindrome)

function checkpalindrome() {
    const InputTextResult = inpuePalindrome.value.toLowerCase().replace(/[^a-z0-9]/g, "");
    const reverseInput = InputTextResult.split("").reverse().join("");

    // console.log(InputTextResult)
    // console.log(reverseInput)

    if (InputTextResult === reverseInput) {
        palindromeResult.textContent = `${inpuePalindrome.value} is the Palindrome...!`;
        palindromeResult.style.color ='green';
        return;
    } else {
        palindromeResult.textContent = `${inpuePalindrome.value} is not the Palindrome...!`
        palindromeResult.style.color ='red';
        return;
    }
}
