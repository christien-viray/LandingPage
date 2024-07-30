"use strict"
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("Form").addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Thank you for your submission! We will be in touch soon.');
        document.getElementById('contact-form').reset();
    })
})