// Connexion à la bade de données MySQL
const mysql = require('mysql');

require('dotenv').config()

// Création de la connexion
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_DB
});

// Connection 
db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('MySQL est connecté :)');
});

module.exports = db;