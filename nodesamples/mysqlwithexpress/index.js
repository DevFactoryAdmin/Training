const express = require('express')
var mysql = require('mysql');
const app = express()
const port = 3000


var con = mysql.createConnection({
    host: "localhost",
    user: "yourusername",
    password: "yourpassword",
    database: "mydb"
});

app.post('/addition', (req, res) => {

    con.connect(function (err) {
        if (err) throw err;
        con.query("SELECT * FROM customers", function (err, result, fields) {
            if (err) throw err;
            console.log(result);
            res.send(result)
        });
    });
});

app.listen(8000, function () {
    console.log("Server is running")
});
