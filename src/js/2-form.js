const GET_KEY = "feedback-form-state";
const getForm = document.querySelector(".feedback-form");
const emailInput = getForm.querySelector('input[name="email"]');
const messageInput = getForm.querySelector('textarea[name="message"]');
getForm.addEventListener("input", changeValueField);
getForm.addEventListener("submit", submitForm);

const formData = {
    email: "",
    message: ""
};

function changeValueField (event) {
    const getNameField = event.target.name;
    formData[getNameField] = event.target.value;
    const createEntryJson = JSON.stringify(formData);
    localStorage.setItem(GET_KEY, createEntryJson);
}

if(!localStorage.getItem(GET_KEY)){

    } else {
    const geItemWithLocalStorage = JSON.parse(localStorage.getItem(GET_KEY));
    formData.email = geItemWithLocalStorage.email;
    formData.message = geItemWithLocalStorage.message;

    emailInput.value = geItemWithLocalStorage.email;
    messageInput.value = geItemWithLocalStorage.message;
}

function submitForm(event) {
    event.preventDefault();
    if(emailInput.value.length === 0 || messageInput.value.length === 0) {
        alert("Fill please all fields");
    } else {
        console.log(formData);
        localStorage.removeItem(GET_KEY);
        formData.email = "";
        formData.message = "";
        emailInput.value = "";
        messageInput.value = "";
    }
    
    
}