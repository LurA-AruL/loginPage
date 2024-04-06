
    // Get the password input field and the eye icon
    const passwordInput = document.querySelector('input[name="password"]');
    const togglePassword = document.getElementById('togglePassword');

    // Add event listener to the eye icon for toggling password visibility
    togglePassword.addEventListener('click', function() {
        // Toggle the type attribute of the password input field
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        
        // Toggle the eye icon between open and closed eye
        if (type === 'password') {
            togglePassword.classList.remove('bi-eye-slash');
            togglePassword.classList.add('bi-eye');
        } else {
            togglePassword.classList.remove('bi-eye');
            togglePassword.classList.add('bi-eye-slash');
        }
    });


   