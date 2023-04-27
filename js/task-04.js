
const decrement = document.querySelector('button[data-action="decrement"]')
const increment = document.querySelector('button[data-action="increment"]')


let counterValue = document.querySelector('#value')
counterValue.textContent = 0;


increment.addEventListener('click', () => {
    counterValue.textContent ++;
})


decrement.addEventListener('click', () => {
    counterValue.textContent --;
});


