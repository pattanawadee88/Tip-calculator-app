const inputBill = document.getElementById('input-bill');
const inputNumPerson = document.getElementById('input-person');
const resetBtn = document.getElementById('reset-btn');
const tipTotalAmountPerPerson = document.getElementById('tip-amount');
const totalAmountPerPerson = document.getElementById('total-amount');
inputNumPerson.value = 0;
function tipAmount(value){
    switch(value){
        case 5/100: 
            doCal(105/100);
            break;
        case 10/100:
            doCal(110/100);
            break;  
        case 15/100:
            doCal(115/100);
            break; 
        case 25/100:
            doCal(125/100);
            break; 
        case 50/100:
            doCal(150/100);
            break;  
    }
}

// Clear input value
resetBtn.addEventListener('click', ()=>{
    inputBill.value = '';
    inputNumPerson.value = '';
} )

console.log(inputNumPerson.value)
const doCal = (tip) => {
    const total = (inputBill.value * (tip));
    const totalPerPerson = total/inputNumPerson.value;
    const tipPerPerson = total-(inputBill.value);
    

    totalAmountPerPerson.innerHTML = Math.round(totalPerPerson);
    tipTotalAmountPerPerson.innerHTML = Math.round(tipPerPerson);
    
}
/* 
1. get values from input 
2. user selects tip
    2.1 custom tip
3. do calculation
4. display on tip amount
5. clear when reset btn clicked



*/