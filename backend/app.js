const express = require('express'); // Importation du framework : création et gestion du serveur
const mysql = require('mysql');
const cors = require('cors');
require('dotenv').config();

// Création de la connexion
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_DB
});
console.log(process.env.DB_USER)

// Connection 
db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('MySQL est connecté');
});


const app = express(); // Application

// CORS : traitement des erreurs (middleware général, ajout des headers)
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next(); // Appel de next pour exécuter les autres fonctions
});



module.exports = app; // Exportation de l\'app : utilisation depuis le serveur Node