// console.log(a); // UNDEFINED

// function a(){}; // function

// console.log(a); // function

// var a = 3;

// console.log(a); // 3

// for (let i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 1000);
// }

// for (const i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 1000);
// }

// for (var i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 1000);
// }

// {   
// var name = "John";
// let age = 3;
// const height = 185;
// } 
// console.log(name); // John
// console.log(age); // Error
// console.log(height); // error undeclared

// function callName() {   
// var name = "John"; // var creates functional scope
// } 
// callName();
// console.log(name);

function help(){
   console.log(this)
}
const obj = {
   help
}
help();
obj.help();