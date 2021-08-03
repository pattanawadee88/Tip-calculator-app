const inputBill = document.getElementById('input-bill');
const inputNumPerson = document.getElementById('input-person');
const resetBtn = document.getElementById('reset-btn');
const tipTotalAmountPerPerson = document.getElementById('tip-amount');
const totalAmountPerPerson = document.getElementById('total-amount');

// Calculate tip
const doCal = (tip) => {
    if(inputNumPerson.value === "" || inputNumPerson.value === null ){
        inputNumPerson.style.border = '2px solid red';
        inputNumPerson.style.fontSize = '0.9rem';
        inputNumPerson.placeholder = 'Please enter number of person';
    }else {
        inputNumPerson.style.border = 'none';
        const total = (inputBill.value * (tip));
        const totalPerPerson = total/inputNumPerson.value;
        const tipPerPerson = total-(inputBill.value);
        
        totalAmountPerPerson.innerHTML = `$`+ Math.round(totalPerPerson);
        tipTotalAmountPerPerson.innerHTML = `$` + Math.round(tipPerPerson);
    }    
}

// Clear input value
resetBtn.addEventListener('click', ()=>{
    inputBill.value = '';
    inputNumPerson.value = '';
} )
/* 
1. get values from input 
2. user selects tip
    2.1 custom tip
3. do calculation
4. display on tip amount
5. clear when reset btn clicked



*/