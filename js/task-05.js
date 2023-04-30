const input = document.querySelector("#name-input");
const span = document.querySelector("#name-output");

input.addEventListener("input", inputForm);

function inputForm(e) {
  if (e.currentTarget.value === "") {
    span.textContent = "Anonymous";
  } else {
    span.textContent = e.currentTarget.value;
  }
}
