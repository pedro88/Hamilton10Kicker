const express = require("express");
const port = process.env.PORT || 5000;
const mysql = require("mysql");

const app = express();

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'hamilton10kicker_db',
    port: 3306
})

connection.connect((err) => {
    if(err){
        console.error("Connection fail: " + err.stack);
        return;
    }
    console.log("Logged to DB");
})

connection.query("SELECT * FROM users", (err, rows, fields) => {
    if(err) throw err;
    console.log("Data is : ", rows);
})



app.listen(port, () => {
    console.log("Server is running...");
});

