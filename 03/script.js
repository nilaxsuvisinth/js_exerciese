// <=========== Loop ============>

// 01

for (let x = 0; x < 5; x++) {
    console.log("Hi John");
}

// 02

let a = 0;
while (a <= 10) {
    console.log(a);
    a++;
}

// 03

for (let i = 1; i <= 10; i++) {
    let square = i * i;
    console.log(`${i} => ${square}`);
}

// 04

for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

// 05 

let sum = 0;

for (let i = 0; i <= 100; i += 2) {
    console.log(i);
    sum += i;
}

console.log(`The sum of all even numbers is ${sum}.`);

