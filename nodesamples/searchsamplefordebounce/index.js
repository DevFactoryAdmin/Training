const express=require('express')
const app=express();
const mysql = require("mysql");
const cors=require("cors")
const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "ecom",
});

con.connect(() => {
  console.log("Connected");
});
app.use(express.json())
app.use(cors())

const projectfetch = (txt) => {
    return new Promise((resolve) => {
      con.query("select * From tblstate where txtName like '"+txt+"%' order by txtName asc limit 6", (err, result) => {
        if (err) console.log(err); 
        resolve(result);
      });
    });
  }; 
app.post('/test',async (req, res)=>{
    res.send(await projectfetch(req.body.txt))
})
app.listen(8000)