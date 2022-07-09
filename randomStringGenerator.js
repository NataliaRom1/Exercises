var alphabet = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";
var randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
var randomString = "";
while (randomString.length < 10) {
  randomString += randomLetter;
  randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
}
console.log(randomString)