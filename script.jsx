function showAlert() {
    alert('Button clicked!');
}

function submitForm(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way
    document.getElementById('formResponse').textContent = 'Thank you for your message!';
    document.getElementById('contactForm').reset(); // Reset the form fields
}
