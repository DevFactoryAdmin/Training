

var p = Promise.all([1, 2, 3]);
var p2 = Promise.all([1, 2, 3, Promise.resolve(444)]); 
setTimeout(function () {
  console.log(p);
  console.log(p2);
  console.log(p3);
});
