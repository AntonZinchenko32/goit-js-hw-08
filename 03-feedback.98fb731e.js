const e=document.querySelector(".feedback-form");if(e.addEventListener("input",(function(e){localStorage.setItem("feedback-form-state",JSON.stringify(t(e)))})),e.addEventListener("submit",(function(e){e.preventDefault(),console.log(t(e)),e.currentTarget.reset(),localStorage.removeItem("feedback-form-state")})),localStorage.getItem("feedback-form-state")){const{email:t,message:a}=JSON.parse(localStorage.getItem("feedback-form-state"));e.email.value=t,e.message.value=a}function t(e){const t={email:"",message:""};return t.event.target.name=e.target.value,t}
//# sourceMappingURL=03-feedback.98fb731e.js.map
