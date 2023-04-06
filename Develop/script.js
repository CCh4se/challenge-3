// Assignment Code
var generateBtn = document.querySelector("#generate");
function generatePassword() {
  var passwordLength = prompt("How many letter do you want in your password")
  console.log(passwordLength)
  var lowercaseConfirm = confirm("Do you want lowercase letters in your password")
  console.log(lowercaseConfirm)
  var uppercaseConfirm = confirm("Do you want uppercase letters in your password")
  console.log(uppercaseConfirm)
  var numericConfirm = confirm("Do you want numeric values in your password")
  console.log(numericConfirm)
  var specialcharactersConfirm = confirm("Do you want special characters in your password")
  console.log(specialcharactersConfirm)

  if(passwordLength < 8){
    console.log('Must be at least' + 8  + 'letters long.');
  } else {
    console.log('Password is valid')
  }
  if(passwordLength > 128){
    console.log('Cannot be more than' + 128 + 'letters long')
  } else {
    console.log('Password is valid')
  }

  // return "Hello World"
}




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
