console.log(a); // function
var a = 3;
{
    console.log(a) // 3
    var a = 20 
    console.log(a); // 20
}
console.log(a);
function a() {
    console.log(a)  
    var a = 20
    console.log(a)
}
console.log(a);
a()  // 20() -- error
console.log(a); // never execute


// suppose variable and function name is same
// both are hoisted
// but function wins here 