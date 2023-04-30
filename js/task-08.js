const form = document.querySelector(".login-form");

form.addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  const formEl = e.currentTarget.elements;
  const email = formEl.email.value;
  const password = formEl.password.value;
  const formObj = { email, password };

  if (email.length === 0 || password.length === 0) {
    alert("Всі поля повинні бути заповнені!!!");
  } else {
    form.reset();
    console.log(formObj);
  }
}
