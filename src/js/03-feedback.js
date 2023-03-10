import throttle from 'lodash.throttle';

const STORAGE_KEY = "feedback-form-state";
const feedbackForm = document.querySelector(".feedback-form");
const emailData = document.querySelector("input");
const messageData = document.querySelector("textarea");
const formData = {};

fillForm();
feedbackForm.addEventListener("input", throttle(saveCurrentValues, 500));

function saveCurrentValues(event){
    // formData[event.target.name]=event.target.value;
    formData.email=emailData.value;
    formData.message=messageData.value;
   
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}
feedbackForm.addEventListener("submit", clearForm);
function clearForm(event){
    event.preventDefault();

    const {elements: {email, message}
    }=event.currentTarget;
    if (email.value==="" ||message.value===""){
    alert("Заповніть, будь ласка, всі поля форми!");}
    else{
        event.currentTarget.reset();
        console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
        localStorage.clear();
    }

};
function fillForm(){
    const storageData = JSON.parse(localStorage.getItem(STORAGE_KEY));

    if (storageData){
emailData.value=storageData.email;
if (storageData.email===undefined){
    emailData.value='' ;
}
messageData.value=storageData.message;
if (storageData.message===undefined){
    messageData.value='';
    }
}}