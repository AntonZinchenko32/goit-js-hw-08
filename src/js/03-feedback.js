var throttle = require('lodash.throttle');

const myForm = document.querySelector(".feedback-form");

myForm.addEventListener("input", handleInput);
myForm.addEventListener("submit", handleSubmit);


if (localStorage.getItem("feedback-form-state")) {
    const { email, message } = JSON.parse(localStorage.getItem("feedback-form-state"));
    myForm.email.value = email;
    myForm.message.value = message;
}

function handleInput(event) {
    
localStorage.setItem("feedback-form-state", JSON.stringify(generateFeedback(event)));
}

function handleSubmit(event) {
    event.preventDefault();
    
    console.log(generateFeedback(event));
    event.currentTarget.reset();
    localStorage.removeItem("feedback-form-state");
}

function generateFeedback(event) {
    const { elements: { email, message } } = event.currentTarget;

    const feedback = {
        email: email.value.trim(),
        message: message.value.trim()
    }
    return feedback;
}
