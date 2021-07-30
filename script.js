const inputBill = document.getElementById('input-bill');
const inputNumPerson = document.getElementById('input-person');
const resetBtn = document.getElementById('reset-btn');
// const inputBillValue = inputBill.value;

// console.log(inputBillValue)
function getValue(){
    console.log(inputBill.value)
    console.log(inputNumPerson.value)
}

// Clear input value
resetBtn.addEventListener('click', ()=>{
    document.querySelector('input').value = '';
} )


/* 
1. get values from input 
2. user selects tip
    2.1 custom tip
3. do calculation
4. display on tip amount
5. clear when reset btn clicked



*/