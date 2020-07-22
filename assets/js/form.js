// Form Functionality

const selected    = document.querySelector('.select-box__selected');
const optionsList = document.querySelector('.select-box__options');
const optionItems = document.querySelectorAll('.select-box__option');

selected.addEventListener('click', () => {
   selected.classList.toggle('select-box__selected--active');
   optionsList.classList.toggle('select-box__options--active');
})

optionItems.forEach( item => {
   item.addEventListener('click', () => {
    selected.innerHTML = item.querySelector('label').innerHTML;
    optionsList.classList.remove('select-box__options--active');
   });
    
});
