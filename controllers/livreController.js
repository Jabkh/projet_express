// controllers/livreController.js
const Livre = require('../models/livre');

// controllers/livreController.js
const getAllLivres = (req, res) => {
  Livre.getAllLivres((err, livres) => {
    if (err) {
      res.status(500).json({ message: err.message });
    } else {
      res.render('livres', { livres: livres });
    }
  });
};


const getLivreById = (req, res) => {
  const livreId = req.params.id;
  Livre.getLivreById(livreId, (err, result) => {
    if (err) {
      res.status(500).json({ message: err.message });
    } else if (result.length === 0) {
      res.status(404).json({ message: 'Livre non trouvé' });
    } else {
      res.json(result[0]);
    }
  });
};

const createLivre = (req, res) => {
  const nouveauLivre = req.body;
  Livre.createLivre(nouveauLivre, (err, result) => {
    if (err) {
      res.status(500).json({ message: err.message });
    } else {
      res.status(201).json({ message: 'Livre créé avec succès', id: result.insertId });
    }
  });
};

const updateLivre = (req, res) => {
  const livreId = req.params.id;
  const livreModifie = req.body;
  Livre.updateLivre(livreId, livreModifie, (err, result) => {
    if (err) {
      res.status(500).json({ message: err.message });
    } else if (result.affectedRows === 0) {
      res.status(404).json({ message: 'Livre non trouvé' });
    } else {
      res.json({ message: 'Livre mis à jour avec succès' });
    }
  });
};

const deleteLivre = (req, res) => {
  const livreId = req.params.id;
  Livre.deleteLivre(livreId, (err, result) => {
    if (err) {
      res.status(500).json({ message: err.message });
    } else if (result.affectedRows === 0) {
      res.status(404).json({ message: 'Livre non trouvé' });
    } else {
      res.json({ message: 'Livre supprimé avec succès' });
    }
  });
};

module.exports = {
  getAllLivres,
  getLivreById,
  createLivre,
  updateLivre,
  deleteLivre
};
