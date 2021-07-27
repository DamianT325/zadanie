const button = document.querySelector('button')
const form = document.getElementById('form')
const formMsg = document.getElementById('textarea')
const error = document.getElementById('error')
const thx = document.querySelector(".div-thx")
const email = document.getElementById('email')

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

button.addEventListener('click', e => {
    e.preventDefault();
    if(form.value == null){
        alert('You must fill form correctly')
    }
    if(!validateEmail(email.value)){
        alert('Check your email or name')
    }
    else if(formMsg.value.length > 60 || formMsg.value == 0){
        alert("Message must be less than 60 characters and cant be blank");
    }else{
        form.remove();
        thx.classList.remove('hidden')
    }
})