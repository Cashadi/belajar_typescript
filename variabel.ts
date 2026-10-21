// // String type examples
// let color: string = "blue";
// let fullName: string = 'Cashadi';
// let age: number = 21;
// let sentence: string = `Hello, my name is ${fullName} and I'll be ${age + 1} next year.`;

// // Output the values
// console.log(color);
// console.log(fullName);
// console.log(age);
// console.log(sentence);

// Explicit type annotations
// String
let greeting: string = "Hello, TypeScript!";

// Number
let userCount: number = 42;

// Boolean
let isLoading: boolean = true;

// Array of numbers
let scores: number[] = [100, 95, 98];

// Output the values
console.log(greeting);
console.log(userCount);
console.log(isLoading);
console.log(scores);

// Function with explicit parameter and return types
function greet(name: string): string {
  return `Hello, ${name}!`;
}

console.log(greet("CASHADI"));

function pemjumlahan(a: number, b: number) {
  return a + b;
}

console.log(`Hasilnya adalah ${pemjumlahan(5, 5)}`);



// Object Type Inference Example

// TypeScript infers the shape of the object
const user = {
  name: "Cashadi",
  age: 21,
  career: "Smart Contract Developer",
};

console.log(user.career);
