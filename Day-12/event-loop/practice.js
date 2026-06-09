// console.log("scipt");
// setTimeout(()=>{console.log("1")},0)
// Promise.resolve().then(()=>{console.log("2")});
// console.log("end");


// ________________________________________
console.log("script");
setTimeout(() => {
  console.log("1");
}, 0);
Promise.resolve()
  .then(() => {
    console.log("2");
  })
  .then(() => {
    console.log("2");
  })
  .then(() => {
    console.log("2");
  });
console.log("end");