const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1480wjddbwls!!MY",
    database: "note",
})

connection.connect();

module.exports = connection;