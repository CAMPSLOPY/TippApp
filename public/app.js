const billInput =  document.querySelector('.bill');
const numberOfPeople =  document.querySelector('.number-people-input');
const selectTipBtn =  document.querySelectorAll('.select-tip-buttons');
const tipAmountEl =  document.querySelector('.tip-amount');
const totalEl =  document.querySelector('.total-amount');
const ResetBtn =  document.querySelector('.resetBtn');
const error= document.querySelector('.error-message');


selectTipBtn.forEach(selectTip => {
selectTip.addEventListener('click', (e)=>{
    e.preventDefault();
    const tip =e.target.dataset.value;
    const billInputvalue = Number(billInput.value);
    const  numberOfPeopleValue = Number(numberOfPeople.value);
    const total = billInputvalue / numberOfPeopleValue;
    const tipAmount = total * (tip / 100);

    if(billInputvalue && numberOfPeopleValue){
    totalEl.textContent = `$${Math.floor(total - tipAmount)}`;
    tipAmountEl.textContent = `$${tipAmount.toFixed(2)}`;
    } else if (!numberOfPeopleValue){
        error.classList.add('show-error');
        numberOfPeople.style.border ='1px solid red';
        numberOfPeople.style.color = 'red'
    }  
})
})