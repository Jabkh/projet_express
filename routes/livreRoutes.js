// routes/livreRoutes.js
const express = require('express');
const router = express.Router();
const livreController = require('../controllers/livreController');

// Route pour récupérer tous les livres
router.get('/', livreController.getAllLivres);

// Route pour récupérer un livre par son ID
router.get('/:id', livreController.getLivreById);

// Route pour créer un nouveau livre
router.post('/', livreController.createLivre);

// Route pour mettre à jour un livre par son ID
router.put('/:id', livreController.updateLivre);

// Route pour supprimer un livre par son ID
router.delete('/:id', livreController.deleteLivre);

module.exports = router;
