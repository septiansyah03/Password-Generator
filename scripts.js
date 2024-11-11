function generatePassword() {
    const schoolName = document.getElementById('schoolName').value;
    const length = document.getElementById('length').value;
    const includeSymbols = document.getElementById('symbols').checked;
    const includeNumbers = document.getElementById('numbers').checked;
    const includeUppercase = document.getElementById('uppercase').checked;
    
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+[]{}|;:,.<>?";
    
    let characters = lowercase;
    if (includeSymbols) characters += symbols;
    if (includeNumbers) characters += numbers;
    if (includeUppercase) characters += uppercaseLetters;
    
    let password = schoolName;
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }
    
    document.getElementById('password').textContent = password;
    
    
    document.getElementById('copyBtn').style.display = 'inline-block';
}

function copyPassword() {
    const passwordText = document.getElementById('password').textContent;

    
    const tempInput = document.createElement('input');
    tempInput.value = passwordText;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);

    
    alert("Password copied to clipboard!");
}
