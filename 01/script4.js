//loop

for(var i=1; i<10; i+=2){
    console.log(i)
}

//01 <=====> Create a for loop to print “Hi John” 5 times in the console.

for (let i = 0; i < 5; i++) {
    console.log("Hi John");
}



// do while loop
x=0
i=0

do{
    x=x+i;
    console.log(x)
    i++;
} while(i<5);


//    <=======================>    //


class Person {
    constructor(ID, name, age) {
      this.ID = ID
      this.name = name;
      this.age = age;
    }
}  
const person1 = new Person("id12", "Nilax", 24);
