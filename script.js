
    function submitForm() {
        
        let email = document.getElementById('email').value;
        let confirmEmail = document.getElementById('confirm-email').value;

        if (email !== confirmEmail) {
            alert('Email addresses do not match. Please check and try again.');
            return;
        }
        alert('Form submitted successfully!');
    }
