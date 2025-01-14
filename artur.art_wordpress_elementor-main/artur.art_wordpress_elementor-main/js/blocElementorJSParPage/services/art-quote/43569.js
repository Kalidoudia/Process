
    emailjs.init('CEfW8Mlq27jg5tncp');  

    // Attach the event listener to the form submit event
    document.getElementById("quoteForm").addEventListener("submit", function(event) {
        event.preventDefault();  // Prevent the form from submitting normally

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;
        const product = document.getElementById("product").value;
        const size = document.getElementById("size").value;
        const quantity = document.getElementById("quantity").value;
        const budget = document.getElementById("budget").value;
        const timeline = document.getElementById("timeline").value;
        const customization = document.getElementById("customization").value;
        const urgency = document.getElementById("urgency").value;

        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const namePattern = /^[A-Za-z\s]+$/;
        const phonePattern = /^[0-9\-\+\s]{10,15}$/;

        if (!namePattern.test(name)) {
            alert("The name must contain only letters and spaces.");
            return;
        }

        if (!emailPattern.test(email)) {
            alert("Please enter a valid email address (e.g., your@email.com).");
            return;
        }

        if (!phonePattern.test(phone)) {
            alert("Please enter a valid phone number (10 digits).");
            return;
        }

        if (!product || !size) {
            alert("Please select a product and size.");
            return;
        }

        if (isNaN(quantity) || quantity < 1) {
            alert("Quantity must be at least 1.");
            return;
        }

        if (!urgency) {
            alert("Please select the urgency of your project.");
            return;
        }

        if (!budget) {
            alert("Please enter a budget.");
            return;
        }

        if (!timeline) {
            alert("Please specify a date for the deadline.");
            return;
        }

        // Create email parameters
        const emailParams = {
            name: name,
            email: email,
            phone: phone,
            product: product,
            size: size,
            quantity: quantity,
            budget: budget,
            timeline: timeline,
            customization: customization,
            urgency: urgency
        };

        // Send email using EmailJS
        emailjs.send('service_zbidr7w', 'template_ksfhg9p', emailParams)  // Replace with your service ID and template ID
            .then(function(response) {
                alert('Your request has been successfully submitted!');
                // Reset the form after successful submission
                document.getElementById("quoteForm").reset();
            }, function(error) {
                alert('An error occurred while submitting your request. Please try again.');
            });
    });
