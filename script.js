
    function submitForm() {
        // Basic email verification
        var email = document.getElementById('email').value;
        var confirmEmail = document.getElementById('confirm-email').value;

        if (email !== confirmEmail) {
            alert('Email addresses do not match. Please check and try again.');
            return;
        }

        // If email addresses match, you can proceed with form submission or other actions
        // In a real-world scenario, this is where you would send the form data to the server

        alert('Form submitted successfully!');
    }
