
const passVariables = {
  lowerCharacters : "abcdefghijklmnopqrstuvwxyz",
  upperCharacters : "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numericalCharacters : "1234567890",
  specialCharacters : "!@#$%^&*()"
};


function passWord() {
  var passLength = "";
  var length = window.prompt("Enter a number from 8 to 128 for password length.");
  var lowercase = window.confirm("Would you like to use lower case letters?");
  if (lowercase) {
    passLength += passVariables.lowerCharacters;
  };
  var uppercase = window.confirm("Would you like to use upper case letters?");
  if (uppercase) {
    passLength += passVariables.upperCharacters;
  };
  var special = window.confirm("Would you like to use special characters?");
  if (special) {
    passLength += passVariables.specialCharacters;
  };
  var numerical = window.confirm("Would you like to use numerical characters?");
  if (numerical) {
    passLength += passVariables.numericalCharacters;
  };
  var password = "";
  for (let i = 0; i < length; i++) {
    password += passLength[Math.floor(Math.random() * passLength.length)]
    document.getElementById('password').value = password;
  }
  return password;
  
}



