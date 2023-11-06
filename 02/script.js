// // <====== Condition =======>

// // Q 01

const age = prompt("Enter your age please:");
let Age = document.getElementById("second");

if (age >= 18) {
  // console.log("You are old enough to drive.");
  Age.innerHTML="You are old enough to drive."
} else {
  const yearsToDrive = 18 - age;
  // console.log(`You are left with ${yearsToDrive} years to drive.`);
  Age.innerHTML=`You are left with ${yearsToDrive} years to drive.`
}


  

//   // Q 02


// const yourAge = prompt("Enter your age:");

// const myAge = 24;

// if (yourAge > myAge) {
//   document.getElementById("third").innerHTML=(`You are ${yourAge - myAge} years older than me`);
// } else if (yourAge < myAge) {
//   document.getElementById("third").innerHTML=(`I am ${myAge - yourAge} years older than you`);
 
// } else {
//   document.getElementById("third").innerHTML=("We are the same age");
// }


// Q 03

// let a = 4;
// let b = 3;

// if (a > b) {
//   // console.log(`${a} is greater than ${b}`);
//   Age.innerHTML=`${a} is greater than ${b}`;
// } else {
//   // console.log(`${a} is less than ${b}`);
//   Age.innerHTML=`${a} is less than ${b}`;

// }

// Q 04

let myMarks = prompt('Enter your marks');
let myGrade;
if (0>=myMarks && myMarks <=100){

if (myMarks >= 80 && myMarks <= 100) {
  myGrade = "A";
  
} else if (myMarks >= 70 && myMarks <= 79) {
  myGrade = "B";
} else if (myMarks >= 60 && myMarks <= 69) {
  myGrade = "C";
} else if (myMarks >= 50 && myMarks <= 59) {
  myGrade = "D";
}
else if (myMarks >= 0 && myMarks <= 49) {
  myGrade = "F";  
} 

}

else{
  myGrade="ivalid Markes"
}

Age.innerHTML=(`my marks ${myMarks}, my grade ${myGrade}`);

// Q 05










// <====== Function =======>

// Q 02

function FullName2(firstName, lastName) {
    return firstName +" "+ lastName;
  }
  
console.log(FullName2("Nilax", "Suvisinth"))

  
// Q 03

function addNumbers(s, n) {
    return s + n;
}

console.log(addNumbers(7, 2))

// Q 04

function areaOfRectangle(length, width) {
    return length * width; 
}

console.log(areaOfRectangle(4, 6))

// Q 05

function perimeterOfRectangle(length, width) {
    return 2 * (length + width);
}

console.log(perimeterOfRectangle(5, 8))

// Q 06

function volumeOfRectPrism(l, w, h) {
    return l * w * h 
}

console.log(volumeOfRectPrism(2, 4, 6))

// Q 07

function  areaOfCircle(r) {
    return Math.PI * r * r;
}

console.log(areaOfCircle(7))

// Q 08

function circumOfCircle(r) {
    return 2 * Math.PI * r;
}

console.log(circumOfCircle(7))

// Q 09

function convertCelsiusToFahrenheit(c) {
    return (c * 9/5) + 32;
}

console.log(convertCelsiusToFahrenheit(23))

// Q 10

function bmi(w, h) {
    var finalBmi = w / (h * h);

    if (finalBmi<18.5) {
        return "Underweight"
    }
    else if (finalBmi<24.9) {
        return "Normal weight"
    }
    else if (finalBmi<29.9) {
        return "Overweight"
    }
    else { return "Obese"}
}

console.log(bmi(30, 40))



// <=========== Object ==============>

// Q 01

const emptyObject = {};

// Q 02

const person = {
    name: "Nilax",
    age: 24,
    introduceYou: function() {
      console.log(`My name is ${this.name} and I am ${this.age} years old`);
    }
  };
  
  person.introduceYou();
  
// Q 03

var greetStudent = {
    name: "Suvisinth",
    age: 23
}

console.log("Hello"+" "+person.name+" "+", Welcome to the Coding School")

// Q 04

let mySchool = {
    name: "MCC",
    since: "1981",
}

console.log(mySchool.name);
console.log(mySchool["since"])

// Q 05

let myFriend ={
    name: "Sankar",
    age: 22,
}

console.log(myFriend);

myFriend.email= "john@example.com";

console.log(myFriend)

// Q 06

var myGirleFriend = {
    name: "Sancy",
    age: 24,
    contact: "0774561234"
}

console.log(myGirleFriend);

delete myGirleFriend.contact;

console.log(myGirleFriend)

// Q 07










// Q 08

let studentDetail = {
    name: "Nilax",
    age: 24
}

let courseDetail = {
    topic: "Cinema",
    year: "2024"
}

console.log({...studentDetail, ...courseDetail})

// Q 09









// Q 10

var book = {
    title: "Harry Potter",
    author: "J. K. Rowling",
    year: "1997"
}

console.log(JSON.stringify(book))