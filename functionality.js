var form = document.getElementById('contactForm');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    var name = form.elements.name.value;
    var email = form.elements.email.value;
    var message = form.elements.message.value;

    var database = firebase.database();

    database.ref('contacts').push({
        name: name,
        email: email,
        message: message,
    });

    form.reset();

   alert (message = "Thank you for your message! We appreciate your feedback and we will get back to you soon!");
});
