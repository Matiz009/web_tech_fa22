let text = "Joe Mat";
let length = text.length; //this method find the length of the string
console.log("Length of string : " + length);

let str = "Monkey,Lion,Elephant";
const part = str.slice(6, 10); //Slice out a portion of a string from position 6 to position 10 (10 not included):

console.log("String : " + part);

let fruits = "Apple, Banana, Kiwi";
let sub = fruits.substring(10, 12); //The difference is that start and end values less than 0 are treated as 0 in substring().
console.log("String: " + sub);

let firstText = "Please visit Microsoft!"; //The replace() method replaces a specified value with another value in a string:
let newText = firstText.replace("Microsoft", "W3Schools");
console.log(newText);

let text1 = "Hello World!";
let text2 = text1.toUpperCase(); //A string is converted to upper case with toUpperCase()
console.log(text2);

let text3 = text1.toLowerCase(); //A string is converted to lower case with toLowerCase()

console.log(text3);

let firstName = "Mati ul";
let lastName = "Rehman";
let fullName = firstName.concat(" ", lastName);
console.log(fullName);

let alphabet = "      Hello World!      ";
let alphabet2 = alphabet.trim();
console.log(alphabet2); //The trim() method removes whitespace from both sides of a string

let sampleText = "     Hello World!    ";
let updated = sampleText.trimStart();
console.log(updated); //The trimStart() method works like trim(), but removes whitespace only from the start of a string.
console.log(updated.trimEnd());

let simpleText = "5";
let padded = simpleText.padStart(4, "x");
console.log(padded);

let string = "Pakistan";
let splitted = string.split(); //A string can be converted to an array with the split() method
console.log(splitted);

/*  JS Search Methods */

let strings = "Please locate where 'locate' occurs!";
console.log(strings.indexOf("locate")); //The indexOf() method returns the index of (the position of) the first occurrence of a specified text in a string
console.log(strings.lastIndexOf("where"));
console.log(strings.search("locate"));
console.log(strings.includes("Please"));
console.log(strings.endsWith("occurs!"));