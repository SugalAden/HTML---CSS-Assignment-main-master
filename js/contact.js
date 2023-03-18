const contactForm = document.querySelector(".contact-form");
const userName = document.querySelector("#fullname");
const nameError = document.querySelector("#nameError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const lastName = document.querySelector("#lastname");
const lastNameError = document.querySelector("#lastNameError");
const number = document.querySelector("#number");
const numberError = document.querySelector("#numberError");


function formValidator(event) {
  event.preventDefault();
  console.log("hello");

  // Validation rule for name.
  if (userName.value.trim().length > 0) {
    nameError.style.display = "none";
  } else {
    nameError.style.display = "block";
  }

  // Validation rule for email.
  if (emailValidator(email.value) === true) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
  }

  // Validation rule for lastName.
  if (lastName.value.trim().length > 10) {
    lastNameError.style.display = "none";
  } else {
    lastNameError.style.display = "block";
  }
  // Validation rule for number

  if (number.value.trim().length > 8) {
    numberError.style.display = "none";
  } else {
    numberError.style.display = "block";
  }
}

// Function that validates if the input is a email or not.
function emailValidator(email) {
  const regEx = /\S+@\S+\.\S+/;
  const macthingPatterns = regEx.test(email);
  return macthingPatterns;
}

contactForm.addEventListener("submit", formValidator);
