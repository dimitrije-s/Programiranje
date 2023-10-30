const form = document.getElementById('recenzija');


const NAME_REQUIRED = "Please enter your name";
const LASTNAME_REQUIRED = "Please enter your last name";
const EMAIL_REQUIRED = "Please enter your email";


function showMessage(input, message) {
    const msg = input.parentNode.querySelector("small");
    msg.innerText = "";


    if (input.value.trim() === "") {
        msg.innerText = message;
    } 
}


form.addEventListener('submit', (event) => {
    event.preventDefault();


    console.log(form.elements['ime'].value);
    console.log(form.elements['prezime'].value);
    console.log(form.elements['email'].value);


    showMessage(form.elements['ime'], NAME_REQUIRED)
    showMessage(form.elements['prezime'], LASTNAME_REQUIRED)
    showMessage(form.elements['email'], EMAIL_REQUIRED)
});

let products = []