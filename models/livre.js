const db = require('../config/db');
require('dotenv').config(); // Charge les variables d'environnement depuis le fichier .env

// const getAllUsers = (callback) => {
//   db.query('SELECT * FROM users', callback);
// };

const Livre = {
  getAllLivres: (callback) => {
    db.query('SELECT * FROM livres', callback);
  },

  getLivreById: (id, callback) => {
    db.query('SELECT * FROM livres WHERE id = ?', [id], callback);
  },

  createLivre: (livre, callback) => {
    db.query('INSERT INTO livres (titre, auteur, annee_publication, disponible) VALUES (?, ?, ?, ?)',
      [livre.titre, livre.auteur, livre.annee_publication, livre.disponible],
      callback
    );
  },

  updateLivre: (id, livre, callback) => {
    db.query('UPDATE livres SET titre=?, auteur=?, annee_publication=?, disponible=? WHERE id=?',
      [livre.titre, livre.auteur, livre.annee_publication, livre.disponible, id],
      callback
    );
  },

  deleteLivre: (id, callback) => {
    db.query('DELETE FROM livres WHERE id = ?', [id], callback);
  }
};

module.exports = Livre;
