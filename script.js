"use strict";
window.addEventListener('DOMContentLoaded', ()=>{
    console.log(document.readyState)
})
// console.log(document.readyState);
const inputBill = document.getElementById('input-bill');
const inputNumPerson = document.getElementById('input-person');
const resetBtn = document.getElementById('reset-btn');
const tipTotalAmountPerPerson = document.getElementById('tip-amount');
const totalAmountPerPerson = document.getElementById('total-amount');
const customTip = document.getElementById('custom-tip');
const error = document.getElementById('error-p');


// Calculate tip
const doCal = (tip) => {
    if(inputNumPerson.value === "" || inputNumPerson.value === null ){
        inputNumPerson.style.border = '2px solid red';
        error.style.display = 'block';
       
    }else {
        inputNumPerson.placeholder = '';
        inputNumPerson.style.border = 'none';
        const total = (inputBill.value * (tip));
        const totalPerPerson = total/inputNumPerson.value;
        const tipPerPerson = (total-(inputBill.value))/inputNumPerson.value;
        
        totalAmountPerPerson.innerHTML = `$`+ Math.round(totalPerPerson);
        tipTotalAmountPerPerson.innerHTML = `$` + Math.round(tipPerPerson);
    }    
}


// A custom tip function
function custom(value){
    let tipValue = (100+value)/100;
    doCal(tipValue);    
}
// Clear input value
resetBtn.addEventListener('click', ()=>{
    inputBill.value = '';
    inputNumPerson.value = '';
    totalAmountPerPerson.innerHTML = '';
    tipTotalAmountPerPerson.innerHTML = '';
    customTip.value = '';
} )


/* 
1. get values from input 
2. user selects tip
    2.1 custom tip
3. do calculation
4. display on tip amount
5. clear when reset btn clicked



*/console.log(document.readyState);