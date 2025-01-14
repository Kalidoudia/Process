
  // Initialize EmailJS
  emailjs.init('CEfW8Mlq27jg5tncp');  // Replace with your EmailJS user ID

  function sendMail(event) {
    event.preventDefault();  
    
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^\d{10}$/;

    if (!name || !email || !phone || !message) {
        alert("Veuillez remplir tous les champs.");
        return;
    }

    if (!emailPattern.test(email)) {
        alert("Veuillez entrer une adresse e-mail valide.");
        return;
    }

    if (!phonePattern.test(phone)) {
        alert("Veuillez entrer un numéro de téléphone valide (10 chiffres).");
        return;
    }
        
    // Create email parameters
    const emailParams = {
        name: name,
        email: email,
        phone: phone,
        message: message
    };
    
    // Send email using EmailJS
    emailjs.send('service_zbidr7w', 'template_09xaeuv', emailParams)  // Replace with your service ID and template ID
      .then(function(response) {
        alert('Message envoyé avec succès !');
        
        // Reset the form after successful submission
        document.getElementById("contact-form").reset();
      }, function(error) {
        alert('Erreur lors de l\'envoi du message. Veuillez réessayer.');
      });
}
