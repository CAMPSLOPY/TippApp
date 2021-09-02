const billInput =  document.querySelector('.bill');
const numberOfPeople =  document.querySelector('.number-people-input');
const selectTipBtn =  document.querySelectorAll('.select-tip-buttons');
const tipAmountEl =  document.querySelector('.tip-amount');
const TotalEl =  document.querySelector('.total-amount');
const ResetBtn =  document.querySelector('.resetBtn');
const error= document.querySelector('.error-message');


// // TO RESET THE ENTIRE APP AFTER CALCULATING
// ResetBtn.addEventListener('click',reset);
// function reset(){
//     TotalEl.innerHTML = `$0.00`;
//     tipAmountEl.innerHTML = `$0.00`;
//     billInputEl.value = null;
//     numberOfPeople.value = null;
// }


selectTipBtn.forEach(selectTip => {
selectTip.addEventListener('click', (e)=>{
    e.preventDefault();
    const tip =e.target.dataset.value;
    const billInputvalue = Number(billInput.value);
    const  numberOfPeopleValue = Number(numberOfPeople.value);
    const total = billInputvalue / numberOfPeopleValue;
})
})