const express = require('express');
const bodyParser = require('body-parser');
const livreRoutes = require('./routes/livreRoutes');
require('dotenv').config(); // Charge les variables d'environnement depuis le fichier .env

// Configuration de la base de données
const db = require('./config/db');

const app = express();

// Utilisation du middleware body-parser pour traiter les données JSON
app.use(bodyParser.json());

// Utilisation des routes des livres
app.use('/livres', livreRoutes);

// Port d'écoute
const port = 3000;
app.listen(port, () => {
  console.log(`Serveur en écoute sur le port ${port}`);
});
