// Form validation for signup and contact forms

document.getElementById('signup-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for signing up!');
});

document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Your message has been sent successfully!');
});
