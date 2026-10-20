// function greet(name: string): string {
//   return `Hello, ${name}!`;
// }

// const message: string = greet("cashadi");
// console.log(message);


// 2
function greet(name : any) {
  return "Hello, ".concat(name, "!");
}

const message = greet("World");
console.log(message);