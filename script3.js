//Day 01

//Q1

// comments can make code readable

//Q2

// Welcome to learn Javascript

//Q3

/*comments can make code readable, 
easy to reuse,
and informative*/

//Q4

var firstNam="Nilax"

var x=5;
var y=6;
z=x<y;
console.log(z)

console.log(null==undefined)
console.log(null===undefined)

//Q5

// String variable
const myName = "Hello World!";
console.log(typeof myName);

// Boolean variables
const isTrue = true;
const isFalse = false;
console.log(typeof isTrue);
console.log(typeof isFalse);

// Undefined variable
let secondName;
console.log(typeof secondName);

// Null variable
const myExample = null;
console.log(typeof myExample);

//Q6

let name1;
var name2;
let name3;
var name4;

//Q7

let name5="Kamal"
var name6=45
let name7=true
var name8="Rajini"

//Q8

const firstName = "Nilax";
const lastName = "Suvisinth";
const maritalStatus = "Single";
const country = "Sri Lanka";
const age = 24;

//Q9

var [firstName2, lastName2, maritalStatus2, country2, age2] = ["Nilax", "Suvisinth", "Single", "Sri Lanka", 24];

//Q10

const myAge = 25;
const yourAge = 30;

console.log("I am " + myAge + " years old");
console.log("You are " + yourAge + " years old");


//Day 02

//Q1

const challenge = 'learn JavaScript';

//Q2

console.log(challenge);

//Q3

console.log(challenge.length);

//Q4

console.log(challenge.toUpperCase());

//Q5

console.log(challenge.toLowerCase());

//Q6

console.log(challenge.substr(0, challenge.indexOf(' ')));

console.log(challenge.substring(0, challenge.indexOf(' ')))

//Q7

console.log(challenge.slice(6, 23));

//Q8

const inputString = "This is a sample Script for testing includes method.";

if (inputString.includes("Script")) {
  console.log("The string contains the word 'Script'.");
} else {
  console.log("The string does not contain the word 'Script'.");
}


//Q9

const myString = "learn JavaScript";

const wordsArray = myString.split(' ');

console.log(wordsArray);

// Q10

var challenge1 = "learn Javascript";
var parts = challenge1.split(" ");

console.log(parts);

// Q11

var inputString2 = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';

console.log(inputString2.split(', '));

//Q12

var inputString3 = "learn Javascript";

console.log(inputString3.replace("learn Javascript", "30 Days Of Python"));

//Q13

var inputString4 = "learn Javascript";

console.log(inputString4.charAt(15));

//Q14

var inputString5 = "learn Javascript";

console.log(inputString5.charCodeAt(6));

//Q15

var inputString6 = "learn Javascript";

console.log(inputString6.indexOf('a'));

//Q16

var inputString7 = "learn Javascript";

console.log(inputString7.lastIndexOf('a'));

//Q17

let sentence = 'You cannot end a sentence with because because because is a conjunction';

console.log(sentence.indexOf('because'));

//Q18

var sentence2 = 'You cannot end a sentence with because because because is a conjunction';

console.log(sentence2.lastIndexOf('because'));

//Q19

// var sentence3 = 'You cannot end a sentence with because because because is a conjunction';

// console.log(sentence3x.search('because'));

// Q20

var stringWithWhitespace = ' learn Javascript ';

console.log(stringWithWhitespace.trim());

//Q21

var inputString8 = "learn Javascript";
var expectedResult = "learn";

var startsWithLearn = inputString8.startsWith(expectedResult);

console.log(startsWithLearn);

//Q22

const inputString9 = "learn Javascript";
const expectedResult2 = "Javascript";

const endsWithJavascript = inputString.endsWith(expectedResult2);

console.log(endsWithJavascript);

//Q23

var inputString10 = "learn Javascript";

console.log(inputString10.match(/a/g));

//Q24

const firstString = '30 Days of ';
const secondString = 'JavaScript';

const mergedString = firstString.concat(secondString);

console.log(mergedString);

//Q25

const inputString11 = 'learn Javascript';

console.log(inputString11.repeat(2));
