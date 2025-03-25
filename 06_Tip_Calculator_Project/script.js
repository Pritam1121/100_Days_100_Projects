const billamountInput = document.getElementById('billamount');
const tippercentageInput = document.getElementById('tippercentage');
const numpersonInput = document.getElementById('numperson');
const calculateButton = document.getElementById('calculateButton');
const totalDiscount = document.getElementById('totalDiscount');
const perpersonAmount = document.getElementById('perpersonAmount');

calculateButton.addEventListener('click', calculate)

function calculate() {
    const billAmountInput = parseFloat(billamountInput.value);
    const tipPercentageInput = parseFloat(tippercentageInput.value);
    const numPersonInput = parseInt(numpersonInput.value);

    // Validation
    if(!(billAmountInput) || !(tipPercentageInput) || !(numPersonInput)){
        alert('Enter the Input...!')
        return
    }

    if(billAmountInput < 0 || tipPercentageInput <=0 || numPersonInput < 0){
        totalDiscount.innerText=`Please enter the valid input...!`
        totalDiscount.style.color = 'red'
        perpersonAmount.innerText = ``;
        return;
    }

    if(Number.isNaN(billAmountInput) || Number.isNaN(tipPercentageInput) || Number.isNaN(numPersonInput)){
        totalDiscount.textContent = `Please enter the correct input`;
        totalDiscount.style.color = 'orange'
        perpersonAmount.textContent = '';
        return;
    }
                
        const TotalDis = (billAmountInput * tipPercentageInput) / 100;
        const PerPErsonDicsount = (TotalDis / numPersonInput);
        totalDiscount.textContent = `Total Amount $${TotalDis.toFixed(2)}`;
        perpersonAmount.textContent = `Per person discount $${PerPErsonDicsount.toFixed(2)}`;            
}