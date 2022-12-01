const express = require("express");                 // Importation framework express
const router = express.Router();                    // Création routeur avec la méthode router() d'express


const auth = require('../middleware/auth');
const admin = require('../middleware/adminControl')

// Importation des logiques métier pour les routes
const userController = require("../controllers/user");


// Route POST pour l'inscription d'un utilisateur
router.post("/signup", userController.signup);

// Route POST pour la connexion d'un utilisateur
router.post("/login", userController.login);

// Route GET pour afficher tous les utilisateurs
router.get('/users', userController.getAllUsers);

// Route GET pour afficher un user
router.get('/profile/:id', auth, userController.getOneUser);

// Route DELETE pour supprimer un user
router.delete('/users/:id', auth, admin, userController.deactivateUser);

module.exports = router;