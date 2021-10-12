const handleSubmit = event => {
    event.preventDefault();
    let email = event.currentTarget.elements["email"].value
    console.log(email)
    if(!validateEmail(email)) {
        document.querySelector("#email-error").style.display = "block"
        let inputElement = document.querySelector("input[name='email'")
        inputElement.classList.add("invalid")
        document.querySelector("#input-container").style.marginBottom = "2rem";
    } else {
        document.querySelector("#email-error").style.display = "none"
        let inputElement = document.querySelector("input[name='email'")
        inputElement.classList.remove("invalid")
        document.querySelector("#input-container").style.marginBottom = "0";
    }
}

const validateEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}