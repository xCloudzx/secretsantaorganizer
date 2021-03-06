function error(element, message){
    errorElements = element.getElementsByClassName("error");

    if (errorElements.length === 0){
        errorElement = document.createElement("p");
        errorElement.className = "error";
        element.appendChild(errorElement);
    }
    
    else{
        errorElement = element.getElementsByClassName("error")[0];
    }

    errorElement.textContent = message;
}

function removeError(element){
    errorElements = element.getElementsByClassName("error");

    if (errorElements.length === 0) return;

    element.removeChild(errorElement);
}

function validatePass(){
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    
    if (password == confirmPassword){
        document.getElementById("submit").disabled = false;
    }

    else{
        document.getElementById("submit").disabled = true;
    }
}

function checkEmailInput(emailInput){
    if (!emailInput.value){
        return;
    }

    emailStatus = validateEmail(emailInput.value);
    
    if (!emailStatus){
        error(emailInput.parentElement, "This is not a valid email.");
    }

    else{
        removeError(emailInput.parentElement);
    }
}

function validateEmail(email){
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email.toLowerCase());
}
