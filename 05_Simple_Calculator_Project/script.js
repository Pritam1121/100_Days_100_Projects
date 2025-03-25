const number1Input = document.getElementById('number1')
const number2Input = document.getElementById('number2')
const calculatreResult = document.getElementById('calculatreResult')

// calculatreResult.addEventListener('click', calculate)

function calculate(oprator) {

    const num1 = parseInt(number1Input.value)
    const num2 = parseInt(number2Input.value)

    if(isNaN(num1) || isNaN(num2)){
        alert('enter the number');
        return
    }

    switch (oprator) {
        case '+':
            calculatreResult.innerText = `The sum is the ${num1 + num2}`
            break
        case '-':
             calculatreResult.innerText = `The subtraction is the ${num1 - num2}`
            break
        case '*':
             calculatreResult.innerText = `The multiplication is the ${num1 * num2}`
            break
        case '/':
            if(num2 == 0){
                calculatreResult.innerText = "Do not divide the zero"
            }
            else{

                calculatreResult.innerText = `The divideation is the ${num1 / num2}`
            }
            break
       default:
            calculatreResult.innerText = 'Invalid Oprator'
            break
    }
}
