
document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting by default

    // Clear previous error messages
    clearErrors();

    // Call validation functions
    let valid = true;

    // Validate Full Name
    const fullName = document.getElementById('fullName').value;
    if (!validateFullName(fullName)) {
        valid = false;
        document.getElementById('fullNameError').innerText = 'Full name must be at least 5 characters long';
    }

    // Validate Email
    const email = document.getElementById('email').value;
    if (!validateEmail(email)) {
        valid = false;
        document.getElementById('emailError').innerText = 'Enter a valid email address';
    }

    // Validate Phone Number
    const phone = document.getElementById('phone').value;
    if (!validatePhone(phone)) {
        valid = false;
        document.getElementById('phoneError').innerText = 'Phone number should be 10 digits and not 123456789';
    }

    // Validate Password
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    if (!validatePassword(password)) {
        valid = false;
        document.getElementById('passwordError').innerText = 'Password must be at least 8 characters, not "password" or the same as your name';
    }

    // Validate Confirm Password
    if (password !== confirmPassword) {
        valid = false;
        document.getElementById('confirmPasswordError').innerText = 'Passwords do not match';
    }

    // If all fields are valid, submit the form (for now we just log the form data)
    if (valid) {
        alert('Form submitted successfully');
        // Optionally, you can make an AJAX call or submit the form here
    }
});

// Clear previous error messages
function clearErrors() {
    const errorElements = document.querySelectorAll('.text-danger');
    errorElements.forEach(function(element) {
        element.innerText = '';
    });
}

// Full Name Validation (at least 5 characters)
function validateFullName(name) {
    return name.length >= 5;
}

// Email Validation (should have '@' character)
function validateEmail(email) {
    return email.includes('@');
}

// Phone Validation (should not be "123456789" and should be 10 digits)
function validatePhone(phone) {
    return phone.length === 10 && phone !== '123456789';
}

// Password Validation (should be at least 8 characters, not "password" or user name)
function validatePassword(password) {
    const userName = document.getElementById('fullName').value.toLowerCase();
    return password.length >= 8 && password !== 'password' && password.toLowerCase() !== userName;
}
