const form = document.getElementById('form');
const email = document.getElementById('email');
const small = form.querySelector('small');

form.addEventListener('submit', e => {
    e.preventDefault();

    // check if it is a valid email
    if (!isValid(email.value)) {
        form.classList.add('error');
        small.innerText = 'Please provide a valid email';
    } else {
        form.classList.remove('error');
        small.innerText = '';
    }
});

/**
 * Checks if a valid email address is entered
 * @param email - email to check
 * @returns { Boolean } - true/false
 */
const isValid = (email) => {
    var validate = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return validate.test(String(email).toLowerCase());
}