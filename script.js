// Password Strength Checker
const passwordInput = document.getElementById('password');
const strengthMessage = document.getElementById('strength');
const strengthBar = document.getElementById('strengthBar');

passwordInput.addEventListener('input', () => {
    const password = passwordInput.value;
    let strength = 0;

    if (password.length >= 8) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[a-z]/.test(password)) strength++;
    if (/\d/.test(password)) strength++;
    if (/[\W_]/.test(password)) strength++;

    updateStrengthBar(strength);
});

function updateStrengthBar(strength) {
    switch (strength) {
        case 1:
        case 2:
            strengthMessage.textContent = 'Weak';
            strengthBar.style.width = '20%';
            strengthBar.style.backgroundColor = 'red';
            break;
        case 3:
            strengthMessage.textContent = 'Medium';
            strengthBar.style.width = '50%';
            strengthBar.style.backgroundColor = 'orange';
            break;
        case 4:
            strengthMessage.textContent = 'Strong';
            strengthBar.style.width = '80%';
            strengthBar.style.backgroundColor = 'yellowgreen';
            break;
        case 5:
            strengthMessage.textContent = 'Very Strong';
            strengthBar.style.width = '100%';
            strengthBar.style.backgroundColor = 'green';
            break;
        default:
            strengthMessage.textContent = 'N/A';
            strengthBar.style.width = '0%';
            break;
    }
}

// Toggle Password Visibility
const togglePassword = document.getElementById('togglePassword');
togglePassword.addEventListener('click', () => {
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
    togglePassword.classList.toggle('fa-eye-slash');
});

// Password Generator
const generateBtn = document.getElementById('generateBtn');
const generatedPassword = document.getElementById('generatedPassword');
const lengthInput = document.getElementById('length');
const copyPassword = document.getElementById('copyPassword');

generateBtn.addEventListener('click', () => {
    const length = lengthInput.value;
    generatedPassword.textContent = generatePassword(length);
});

function generatePassword(length) {
    const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }
    return password;
}

// Copy Password
copyPassword.addEventListener('click', () => {
    const textarea = document.createElement('textarea');
    textarea.value = generatedPassword.textContent;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    alert('Password copied to clipboard!');
});
