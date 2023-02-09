var throttle = require('lodash.throttle');

const myForm = document.querySelector(".feedback-form");
let feedback = { email: "", message: "" };
const getItem = localStorage.getItem("feedback-form-state");

bringSavedInput(getItem);

myForm.addEventListener("input", throttle(handleInput, 500));
myForm.addEventListener("submit", handleSubmit);

function bringSavedInput (item) {
    if (item === null) return;
    
    try {
        feedback = JSON.parse(getItem);
    }
    catch (error) {
        console.log(error.name);
        console.log(error.message); 
    }

    for (const key in feedback) {
        myForm[key].value = feedback[key];
    }
}

function handleInput(event) {
    const trimmedValue = event.target.value.trim();
    
    feedback[event.target.name] = trimmedValue;
    
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


