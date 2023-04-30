const valid = document.querySelector("#validation-input");
const attributeLength = Number(valid.dataset.length);

valid.addEventListener("blur", validLength);

function validLength(e) {
  const meaning = e.currentTarget;
  const validLength = e.currentTarget.value.length;

  if (validLength === attributeLength) {
    meaning.classList.remove("invalid");
    meaning.classList.add("valid");
  } else {
    meaning.classList.add("invalid");
  }
};
