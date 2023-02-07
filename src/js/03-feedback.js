

const myForm = document.querySelector(".feedback-form");

myForm.addEventListener("input", handleInput);

function handleInput(event) {
  const {
    elements: { email, message }
  } = event.currentTarget;

  if (email.value === "" || message.value === "") {
    return console.log("Please fill in all the fields!");
  }

  console.log(`Login: ${email.value}, Password: ${message.value}`);
  
  event.currentTarget.reset();
}
