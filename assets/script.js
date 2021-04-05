// Assignment code here
// Arrays for lowercase, uppercase, numeric and special character
var lowerCaseChar = "abcdefghijklmnopqrstuvwxyz";
var upperCaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numericChar = "0123456789";
var specialChar = "!@#$%^&*?";

// Array assignment to request characters in password
var passwordLength;
var confirmLowerCase;
var confirmUpperCase;
var confirmNumber;
var confirmSpecial;

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// length of the password
function choseLength() {
  passwordLength = prompt("Please choose password length between 8-128 characters")
  if (passwordLength < 8) {
    alert("Password must be between 8-128 characters");
    choseLength();
  }
  else if (passwordLength > 128) {
    alert("Password must be between 8-128 characters");
    choseLength();
  }
  else if (isNaN(passwordLength)) {
    alert("Password must be between 8-128 characters");
    choseLength();
  }
}

// does user want to include uppercase
function includeUpperCase() {
  confirmUpperCase = window.confirm("Would you like to have Uppercase included?")
  if (confirmUpperCase) {
    return confirmUpperCase;
  }
  else {
    return confirmUpperCase;
  }
}

// does user want numbers
function includeNumber() {
  confirmNumber = window.confirm("Would you like to include numbers?")
  if (confirmNumber) {
    return confirmNumber;
  }
  else {
    return confirmNumber;
  }
}

//does user want special character
function includeSpecial() {
  confirmSpecial = window.confirm("Would you like to include special characters?")
  if (confirmSpecial) {
    return confirmSpecial;
  }
  else {
    return confirmSpecial;
  }
}


// Defining the generate password button
function generatePassword() {
  choseLength();
  console.log(passwordLength);

  includeUpperCase();
  console.log(confirmUpperCase);

  includeNumber();
  console.log(confirmNumber);

  includeSpecial();
  console.log(confirmSpecial);

  var characters = lowerCaseChar;
  var password = "";
  if (confirmUpperCase && confirmNumber && confirmSpecial) {
    characters += upperCaseChar + numericChar + specialChar;
  }
  else if (confirmUpperCase && confirmNumber) {
    characters += upperCaseChar + numericChar;
  }
  else if (confirmUpperCase && confirmSpecial) {
    characters += upperCaseChar + specialChar;
  }
  else if (confirmSpecial) {
    characters += specialChar;
  }
  else if (confirmUpperCase) {
    characters += upperCaseChar;
  }
  else if (confirmNumber) {
    characters += numericChar;
  }
  else {
    characters === lowerCaseChar;
  }
  // statement to show how many characters gets chosen and randomized by math
  for (var i = 0; i < passwordLength; i++) {
    password += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  // returns to generate new password
  return password;
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
