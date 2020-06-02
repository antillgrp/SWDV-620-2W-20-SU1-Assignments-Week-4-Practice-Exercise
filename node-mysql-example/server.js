const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");

var app = express();
app.use(bodyParser.json());

var mysqlConn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password:"password",
    multipleStatements: true
});

mysqlConn.connect( err => {
    if(!err)
    {
        console.log("Succefully connected to MySQL");
    }
    else 
    {
        console.log("Connection Failed");
        console.log(err);
    }
});

app.listen(3000);