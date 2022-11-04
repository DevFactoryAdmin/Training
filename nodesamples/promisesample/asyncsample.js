const mysql = require("mysql");
const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "ecom",
});

con.connect(() => {
  console.log("Connected");
});
const projectfetch = () => {
  return new Promise((resolve) => {
    con.query("select * From tblstate", (err, result) => {
      if (err) console.log(err); 
      resolve(result);
    });
  });
};

async function outer() {
  console.log(await projectfetch());
  console.log("after");
  console.log(await projectfetch());
}
outer();


