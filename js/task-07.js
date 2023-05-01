const input = document.querySelector("#font-size-control");
const text = document.querySelector("#text");
text.style.fontSize = `${input.value}px`;
input.addEventListener("input", rangeFontSize);

function rangeFontSize(e) {
  let rangeResult = e.currentTarget.value;
  text.style.fontSize = `${rangeResult}px`;
};
