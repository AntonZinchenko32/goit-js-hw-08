var throttle = require('lodash.throttle');

const myForm = document.querySelector(".feedback-form");
const feedback = { email: "", message: "" };

console.log("test12");

if (localStorage.getItem("feedback-form-state")) {
    const { email, message } = JSON.parse(localStorage.getItem("feedback-form-state"));
    myForm.email.value = email;
    myForm.message.value = message;
    feedback.email = email;
    feedback.message = message;
}

myForm.addEventListener("input", throttle(handleInput, 500));
myForm.addEventListener("submit", handleSubmit);

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
    feedback.email = "";
    feedback.message = "";
    event.currentTarget.reset();
    localStorage.removeItem("feedback-form-state");
}


