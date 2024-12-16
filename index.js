const express = require("express");
const port = process.env.PORT || 5000;
const mysql = require("mysql");

const app = express();

const names = [
    "Alex",
    "André",
    "Andrii",
    "Bastien",
    "Bryan",
    "Cédric",
    "Charlotte",
    "Denis",
    "Emilie",
    "Emmanuel",
    "Frédéric",
    "Guillaume",
    "Hugo",
    "Jaâd",
    "Jamaldinne",
    "Justine",
    "Lucas",
    "Marie",
    "Martin",
    "Mehdi",
    "Mehdi",
    "Najib",
    "Nicolas",
    "Pascal",
    "Pierre",
    "Quentin",
    "Robin",
    "Scott",
];

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "Hamilton10Kicker_DB",
    port: 3306,
});

connection.connect((err) => {
    if (err) {
        console.error("Connection fail: " + err.stack);
        return;
    }
    console.log("Logged to DB");
});

function addUser(value) {
    connection.query(
        'INSERT INTO users (name) VALUES (?)', [value],
        (err, rows, fields) => {
            if (err) throw err;
            console.log("data created : ", rows);
        }
    );
}

function deleteUser(id){
    connection.query(
        'DELETE FROM users WHERE id=(?)', [id],
        (err, rows, fields) => {
            if (err) throw err;
            console.log("data delete : ", rows);
        }
    );
}

for(let i = 1; i < 4; i++){
    deleteUser(i);
}

// for(let i = 0; i < names.length; i++){
//     addUser(names[i]);
// }



connection.query("SELECT * FROM users", (err, rows, fields) => {
    if (err) throw err;
    console.log("Data is : ", rows);
});

app.listen(port, () => {
    console.log("Server is running...");
});
