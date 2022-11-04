const doSomethingWithoutAsync = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Without Async"), 3000);
  });
};
const doSomethingWithAsync = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve("With Async"), 3000);
  });
};
const doSomething = async() => {
    console.log(await doSomethingWithAsync());
    console.log( doSomethingWithoutAsync());
};

console.log("Before");
doSomething();
console.log("After");
