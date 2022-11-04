const express = require("express");
const app = express();

const val="get#customer.list";
var splitted=val.split("#");
var policy=splitted[0];
var balance=splitted[1];
var splitted=balance.split(".");
console.log("Policy=>"+policy);
console.log("Service=>"+splitted[0]);
console.log("Function=>"+splitted[1]);


function middleware(functn) {
    return (res, req, next)=>{ 
        console.log(functn) 
        next();
    }
}

app.get("/getproducts", middleware("get#product.list"), (req, res) => {
  res.send("hello");
});

app.listen(8000, () => {
  console.log("Server is running");
});
