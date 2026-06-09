console.log("script start");

setTimeout(() => {
  console.log("setTimeout 1");
}, 0);

new Promise((resolve) => {
  console.log("promise 1");
  resolve();
}).then(() => {
  console.log("then 1");
});

setTimeout(() => {
  console.log("setTimeout 2");
}, 0);

console.log("script end");
// Script Start
// promise 1
// script end
// then 1
// setTimeout 1
// setTimeout 2