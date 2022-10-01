var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

generateBtn.addEventListener("click", writePassword);

function writePassword(){
  var passwordLength = prompt("How long would you like your password to be?", "Min 8 characters, max 128 characters")

if(isNaN(passwordLength)){
    writePassword()
    }
    if(passwordLength < 8){
      writePassword()
    }
    if(passwordLength > 128){
      writePassword()
    }
    var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y","z" ]
    var special = ["!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"]
    var capital = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y","Z"]
    var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
    
    
    
    var capitalPrompt = confirm("Do you want upper case letters?");
    if (capitalPrompt === true){
        var letters = letters.concat(capital)
    }

    var numbersPrompt = confirm("Do you want numbers?");
    if (numbersPrompt === true){
        var letters = letters.concat(numbers)
    }

    var specialPrompt = confirm("Do you want special characters?");
    if (specialPrompt === true){
        var letters = letters.concat(special)
    }

    var generatePassword = document.getElementById("password")
    for (i = 0; i < passwordLength; i++) {
        var index = Math.floor(Math.random() * letters.length);
        var y = document.createTextNode(letters[index])
        generatePassword.appendChild(y)
    }
}

