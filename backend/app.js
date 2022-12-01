const express = require('express'); // Importation du framework : création et gestion du serveur
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
require('dotenv').config();

const userRoutes = require("./routes/user");

const app = express(); // Application

// CORS : traitement des erreurs (middleware général, ajout des headers)
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next(); // Appel de next pour exécuter les autres fonctions
});

app.use(bodyParser.json());                                                // Définition de la fonction json comme middleware global
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(helmet());

app.use("/api/auth", userRoutes);

module.exports = app; // Exportation de l\'app : utilisation depuis le serveur Node