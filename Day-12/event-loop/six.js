console.log("script start");

let promise = new Promise((resolve) => {
  setTimeout(() => {
    console.log("setTimeout inside promise");
    resolve();
  }, 100);
});

promise.then(() => {
  console.log("promise resolved");
});

console.log("script end");