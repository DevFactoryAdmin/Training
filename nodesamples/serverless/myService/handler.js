"use strict";

const mysqlvar = require("mysql");
var con = mysqlvar.createConnection({
  host: "database-1.cnqwiwmwxmd4.us-west-2.rds.amazonaws.com",
  user: "admin",
  password: "abcd1234",
  database: "snowbird",
});
con.connect(function (err) {
  if (err) {
    console.log(err);
    return callback(null, err);
  } else {
    console.log("connected");
  }
});

module.exports.hello = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;

  con.query("select id, txtUserRole from tbluserroles", (err, result) => {
    if (err) return callback(null, JSON.stringify(err));
    else return callback(null, JSON.stringify(result));
  });
};
