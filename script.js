// // alert(`hello world`)
// console.log('love javascript!')
// console.log("mama love you!");
// console.log(`programming is a great fun!`);
// // let and const keywords.
// let firstName = "John";
// let lastName = "mike";
// const countryName = "America";
// console.log(firstName);
// let age=50;
// console.log(age);
// age="32";
// console.log(age);
// const pi=3.14;
// // pi=10;
// console.log(pi);
// console.log((3 + 2) - 76 * (1 + 1));
// let a=10;
// console.log(a);
// a=15
// console.log(a);
// let b= a*3;
// console.log(b);
// //new calculation for percentage.
// const max=57;
// const actual=max-13;
// const percentage=actual/max;
// console.log(percentage);
//here is global scoping a variables examples.
// let university="harvard university";
// function studentInfo() {
//    console.log(university);
// }
// studentInfo()
// let country="Ethiopia";
// let country2="America";
// console.log(country);
// function showCountry() {
//   console.log(country2);
// }
// showCountry()
// //here is function scoping.
// function student() {
//     let name="mike";
//     console.log(name);
// }
// student()
//login system.
// let username="Binal";
// function login() {
//     let password="12345";
//     console.log(username);
//     console.log(password);
// }
// login()
//for arrow function examples/
// const sum = (num1, num2) => {
//   return num1 + num2;
// };
// console.log(sum(11, 7));
// const square = (y) => {
//   return y * y;
// };
// console.log(square(10));
// const sub = (x, y) => x - y;
// console.log(sub(12,7));
//loop statement and it prints from 0 to 4.
// for (let i = 0; i < 5; i++) {
//     console.log(i);
// }
//if conditional statement.
//  let mass="30";
//  if (mass<=50) {
//   console.log("you're not enough!");
//  }
//practical login example in if...else statement.
// let password = "1234";
// if (password === "1234") {
//   console.log("Login successful!");
// }
// else{
//   console.log("Incorrect password!");
// }
//else if statement for checking student grade.
// let score = 100;
// if (score >= 90) {
//   console.log("A");
// } else if (score >= 80) {
//   console.log("B");
// } else if (score >= 70) {
//   console.log("C");
// } else if (score >= 60) {
//   console.log("D");
// } else if (score >= 50) {
//   console.log("E");
// } else {
//   console.log("F");
// }
//nested conditional statements for premium classes/
// let isLoggedIn = true;
// let isPremium = false;
// if (isLoggedIn) {
//   if (isPremium) {
//     console.log("Welcome to premium course.");
//   } else {
//     console.log("Please upgrade your account.");
//   }
// } else {
//   console.log("Please login first.");
// }
// //inside function and the most recommended way. and the first if condition skips automatically cuz it's false!
// function checkUserAccess(isLoggedIn, isPremium) {
//   if (isLoggedIn) {
//     if (isPremium) {
//       console.log("Welcome to the premium course.");
//     } else {
//       console.log("Please upgrade your account.");
//     }
//   } else {
//     console.log("Please log in first.");
//   }
// }

// // Call the function with different values
// checkUserAccess(false, true);
//usage of switch statement to compare and match with several choices.
// let day = 6;
// switch (day) {
//   case 1:
//     console.log("Monday");
//     break;
//   case 2:
//     console.log("Tuesday");
//     break;
//   case 3:
//     console.log("Wednesday");
//     break;
//   case 4:
//     console.log("Thursday");
//     break;
//   case 5:
//     console.log("Friday");
//     break;
//   case 6:
//     console.log("Saturday");
//     break;
//   case 7:
//     console.log("Sunday");
//     break;
//   default:
//     console.log("Invalid day!!!");
//     break;
// }
// we can use also through the else if statement.
// let day = 6;
// if (day === 1) {
//   console.log("Monday");
// } else if (day === 2) {
//   console.log("Tuesday");
// } else if (day === 3) {
//   console.log("Wednesday");
// }else{
//   console.log("You entered invalid day!!");
// }
//ternary statement is a short hand of else if statement and so the below code explains that.
// let age=11;
// age>=18 ? console.log("Sure you can vote.") : console.log("Sorry you can't vote.");

//  const canVote=(age)=>{
//   if (age>=18) {
//     console.log("Sure you can vote.");
//   }else{
//     console.log("Sorry you can't vote.");
//   }
//  }
// canVote(15)
//for loop example.
// for (let i = 0; i<=17; i++) {
//  console.log(i);
// }
//do...while loop example.
// let i=10;
// do {
//     console.log(i);
//     i++;
// } while (i<=5);
//for....of loop example.
// let fruits=["apple", "mango", "orange"];
// for (const fruit of fruits) {
//     console.log(fruit);
// }
//  let students=["sara", "mike", "john","han"];
//  for (const student of students) {
//     console.log("hey", student);
//  }
//now it's the time for for...in loop examples.
// let student = {
//   age: 21,
//   name: "susan",
//   department: "electrical",
// };
// for (let key in student) {
//    console.log(key, ":", student[key]);
// }
//her wo do have second example for the sake of clarity.
// let  student={
//     firstName:"Bianca",
//     lastName:"marina",
//     age:45,
//     nationality:"america",
//     sex:"female",
//     university:"harvard",
//     department: "electrical",
//     eyeColor:"brown",
//     height:178,
// }
// for (const key in student) {
//     console.log(key,":",student[key]);
// }
//the nested loop examples.
// for (let i = 1; i <= 7; i++) {
//   for (let j = 0; j <= 3; j++) {
//     console.log(i, j);
//   }
// }
//here is how the break works. and the outputs are 1 upto 4.
// for (let i = 1; i <= 10; i++) {
//   if (i === 5) {
//     break;
//   }

//   console.log(i);
// }
// //and this prints only the number in a condition.// prints 6.
// for (let i = 0; i <= 7; i++) {
//  if (i==6) {
//   console.log(i);
//   break;
//  }

// }
//continue and break concepts.
// for (let i = 0; i <= 7; i++) {
//   if (i === 3) {
//     continue;
//   }
//   console.log(i);
// }
//for loop in array form example just print all the numbers.
// let numbers = [1, 2, 3, 4, 5];
// for (let i = 0; i < numbers.length; i++) {
//   console.log(numbers[i]);

// }
//Object Oriented Programming.
// const student = {
//   name: "mike",
//   age: 23,
//   department: "computer engineering",
//   location: "america",
//   university: "harvard",
//   role: "developer",
//   introduce(){
//     console.log(`my name is S${this.name}.`);
//     console.log(`i'm ${this.age} years old.`);
//     console.log(`i study ${this.department}.`);
//     console.log(`and from ${this.location}.`);
//     console.log(`in ${this.university}.`);
//     console.log(`my best role is ${this.role}.`);
//   },
// };
// student.introduce();
// creating an object in javascript.
// let car={
//     name:"toyota",
//     year:"ford",
//     model:"F-150",
//     myFunction: function () {
//         console.log("engine started");
//         // return this.year;
//     },
// };
// //same thing in arrow function just creating an object on js.
// let student = {
//   name: "john",
//   surName: "alice",
//   department: "computer engineering",
//   height: 173,
//   age: 24,
//   action: () => {
//     console.log("code developer");
//     return this.height;
//   },
// };
// //  console.log(car);
// console.log(student["height"]);
// console.log(student.department);
// console.log(student.action()); //the .action is used for display the text "code developer"!
// nested objects example how to create and how to access them simply in dot notation.
// let person={
//     name:"bianca",
//     age:37,
//     nationality:"Ethiopian",
//     height:157,
//     address:{
//         country:"United States",
//         state:"Virginia",
//         city:"Alexandria",
//     },
// };
// console.log(person.address.city);
// creating object on js using constructor.
// class Person {
//   constructor(name, email, phone) {
//     ((this.name = name),
//       (this.email = email),
//       (this.phone = phone),
//       (this.action = function () {
//         return this.email;
//       }));
//   }
// }
// const person1 = new Person("james ", "james@test.com", "135790");
// const person2 = new Person("bianca", "bianca@test.com", "135790");
// const person3 = new Person("mike", "mike@text.com", "135790");
// console.log(person1);
// console.log(person2);
// console.log(person3);
class Country {
  constructor(name, code, state, zone) {
    ((this.name = name),
      (this.code = code),
      (this.state = state),
      (this.zone = zone),
      (this.action = function () {
        return this.state;
      }));
  }
}
const country1 = new Country("UK", +123, "England", "West");
const country2 = new Country("US", +234, "Texas", "East");
const country3 = new Country("China", +456, "Hongkong", "Middle");
const country4 = new Country("Japan", +251, "Tokyo", "Middle East");
const country5 = new Country("Russia", +67, "Moscow", "South");

console.log(country1);
console.log(country2);
console.log(country3);
console.log(country4);
console.log(country5);