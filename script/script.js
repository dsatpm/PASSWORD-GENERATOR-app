// // Assignment Code
// var generateBtn = document.querySelector('#generate');

// // Generates a 12 character password using regex parameters
// function generatePassword() {
// 	var passwordRegex = /^[A-Za-z0-9!@#$%&-_+]+$/;
// 	var password;

// 	do {
// 		password = randomPasswordGenerate(12);
// 	} while (!passwordRegex.test(password));

// 	return password;
// }

// // Turns the generated password into random string of characters of desired length (12)
// function randomPasswordGenerate(length) {
// 	var validChars =
// 		'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&-_+';
// 	var generatedPassword = '';
// 	for (let i = 0; i < length; i++) {
// 		var randomIndex = Math.floor(Math.random() * validChars.length);
// 		generatedPassword += validChars.charAt(randomIndex);
// 	}
// 	return generatedPassword;
// }

// // Writes password to <textarea> field of HTML file
// function writePassword() {
//   var password = generatePassword();
//   var written = document.querySelector('#password');
//   written.value = password;
// }

// Selects the 'generate' id of the <button> in the DOM
var generateBtn = document.querySelector('#generate');

// Adds listener for click events on <button>
generateBtn.addEventListener('click', generatePassword);

// The function takes several variable arguments, iterates through the password length
// chosen by user and returns a password randomly generated with the chosen character
function generatePassword() {
	var lowerCase = confirm('Will your password include lowercase characters?');
	var upperCase = confirm('Will your password include uppercase characters?');
	var nums = confirm('Will you include numbers in your password?');
	var specialChars = confirm(
		'Will you include special characters (%, $, @, etc.) in your password?'
	);
	var passwordLength = parseInt(
		prompt(
			'How long would you like your password to be? Enter a number between 8 - 128'
		)
	);

	var passwordChars = '';

	if (lowerCase) {
		passwordChars += 'abcdefghijklmnopqrstuvwxyz';
	}
	if (upperCase) {
		passwordChars += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	}
	if (nums) {
		passwordChars += '0123456789';
	}
	if (specialChars) {
		passwordChars += '!@#$%&-_=+';
	}
	if (isNaN(passwordLength) || isNaN(passwordLength)) {
		alert('Please enter a valid number between 8 - 128');
		return;
	}
	if (passwordLength < 8 || passwordLength > 128) {
		alert('Please enter a number between 8 - 128');
	}
	if (passwordChars === '') {
		alert(
			'Select at least 1 of the options provided to generate your random password.'
		);
		return;
	}
	var password = '';
	for (let i = 0; i < passwordLength; i++) {
		var randomNumber = Math.floor(Math.random() * passwordChars.length);
		password += passwordChars.charAt(randomNumber);
	}
	alert('Generated Password: ' + password);
	return;
}
