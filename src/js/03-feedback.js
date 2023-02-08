var throttle = require('lodash.throttle');

const myForm = document.querySelector(".feedback-form");
const feedback = { email: "", message: "" };

console.log("test");

myForm.addEventListener("input", throttle(handleInput, 500));
myForm.addEventListener("submit", handleSubmit);

if (localStorage.getItem("feedback-form-state")) {
    const { email, message } = JSON.parse(localStorage.getItem("feedback-form-state"));
    myForm.email.value = email;
    myForm.message.value = message;
}

function handleInput(event) {

    const trimmedValue = event.target.value.trim();
    
    event.target.name === "email"
        ? feedback.email = trimmedValue
        : feedback.message = trimmedValue
    
localStorage.setItem("feedback-form-state", JSON.stringify(feedback));
}

function handleSubmit(event) {
    event.preventDefault();
    
    console.log(feedback);
    event.currentTarget.reset();
    localStorage.removeItem("feedback-form-state");
}


