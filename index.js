const form = document.getElementById('form');

const firstname_input = document.getElementById('firstname-input');
const email_input = document.getElementById('email-input');
const password_input = document.getElementById('password-input');
const confirm_password = document.getElementById('confirm-password');
const error_message = document.getElementById('error_message');

form.addEventListener('submit', (e) => {
    let errors = [];

    const isSignup = firstname_input !== null && confirm_password !== null;

    if (isSignup) {
        errors = getSignupFormErrors(
            firstname_input.value,
            email_input.value,
            password_input.value,
            confirm_password.value
        );
    } else {
        errors = getLoginFormErrors(
            email_input.value,
            password_input.value
        );
    }

    if (errors.length > 0) {
        e.preventDefault();
        error_message.innerText = errors.join(". ");
    }
});

function getSignupFormErrors(firstname, email, password, confirm_password) {
    let errors = [];

    if (!firstname.trim()) {
        errors.push('Name is required');
        firstname_input.parentElement.classList.add('incorrect');
    }
    if (!email.trim()) {
        errors.push('Email is required');
        email_input.parentElement.classList.add('incorrect');
    }
    if (!password.trim()) {
        errors.push('Password is required');
        password_input.parentElement.classList.add('incorrect');
    }
    if (password !== confirm_password) {
        errors.push("Passwords don't match");
        confirm_password.parentElement.classList.add('incorrect');
    }

    return errors;
}

function getLoginFormErrors(email, password) {
    let errors = [];

    if (!email.trim()) {
        errors.push('Email is required');
        email_input.parentElement.classList.add('incorrect');
    }
    if (!password.trim()) {
        errors.push('Password is required');
        password_input.parentElement.classList.add('incorrect');
    }

    return errors;
}

const allInputs = [firstname_input, email_input, password_input, confirm_password].filter(Boolean);

allInputs.forEach(input => {
    input.addEventListener('input', () => {
        if (input.parentElement.classList.contains('incorrect')) {
            input.parentElement.classList.remove('incorrect');
        }
        error_message.innerText = '';
    });
});

