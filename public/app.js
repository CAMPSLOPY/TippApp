const billInput =  document.querySelector('.bill');
const numberOfPeople =  document.querySelector('.number-people-input');
const selectTipBtn =  document.querySelectorAll('.select-tip-buttons');
const tipAmountEl =  document.querySelector('.tip-amount');
const totalEl =  document.querySelector('.total-amount');
const resetBtn =  document.querySelector('.resetBtn');
const error= document.querySelector('.error-message');
const customBtn = document.querySelector('.custom');


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
    error.classList.remove('show-error');
    numberOfPeople.style.color = 'green'
    numberOfPeople.style.border ='1px solid hsl(172, 57%, 50%)';
    resetBtn.style.backgroundColor = 'hsl(172, 57%, 50%)';
    } else if (!numberOfPeopleValue){
        error.classList.add('show-error');
        numberOfPeople.style.border ='2px solid red';   
    }  
})
})

// clear the whole page 
resetBtn.addEventListener('click', (e)=>{
billInput.value =null;
numberOfPeople.value = null;
totalEl.innerHTML = `<div>$0.00</div>`;
tipAmountEl.innerHTML = `<div>$0.00</div>`;
resetBtn.style.backgroundColor ="#01545ae0";
customBtn.value = "Custom"
})

customBtn.addEventListener('submit', (e) =>{
    e.preventDefault();
const custom = e.target.value;
console.log(custom)
})