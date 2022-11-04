const express = require("express");
const app = express();
const port = 8000;
const cors = require("cors");
app.use(cors());
app.use(express.json());
const jwt = require("jsonwebtoken");

function tokenVerify(req, res, next) {
  const bearerHeader = req.headers["authorization"];
  //console.log(bearerHeader)
  if (typeof bearerHeader !== "undefined") {
    const bearerToken = bearerHeader.split(" ")[1];
    req.token = bearerToken;
    jwt.verify(req.token, "secretkey", (err, authData) => {
      if (err) {
        res.sendStatus(403);
      } else {
        next();
      }
    });
  } else {
    res.sendStatus(403);
  }
}

app.post("/logincheck", (req, res) => {
  const user = {
    id: 1,
    username: "john",
    email: "john@gmail.com",
  }; 
  jwt.sign({ user: user }, "secretkey", (err, token) => {
    res.json({
      token,
    });
  });
});

app.post("/getdata", tokenVerify, (req, resp) => {
  resp.send("Data from getdata");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
