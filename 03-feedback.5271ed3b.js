document.querySelector(".feedback-form").addEventListener("input",(function(e){const{elements:{email:l,message:n}}=e.currentTarget;if(""===l.value||""===n.value)return console.log("Please fill in all the fields!");console.log(`Login: ${l.value}, Password: ${n.value}`),e.currentTarget.reset()}));
//# sourceMappingURL=03-feedback.5271ed3b.js.map
