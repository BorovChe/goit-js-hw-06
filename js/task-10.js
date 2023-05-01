function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const inputEl = document.querySelector('[type="number"]');
const divEl = document.querySelector('#boxes');


inputEl.addEventListener('input', createBoxes);
createBtn.addEventListener('click', createDiv);
destroyBtn.addEventListener('click', destroyBoxes);


function createBoxes(amount) {
  const inputValue = amount.currentTarget.value;

  for (let i = 0; i < inputValue; i += 1) {
    const newDivEl = document.createElement('div');
    newDivEl.style.width = '30px';
  newDivEl.style.height = '30px';
    newDivEl.style.backgroundColor = `${getRandomHexColor()}`;
  divEl.prepend(newDivEl);

  };
};

function createDiv() {
};


function destroyBoxes() {
  divEl.innerHTML = '';
};
