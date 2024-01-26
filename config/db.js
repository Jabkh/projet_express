const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'votre_utilisateur',
  password: 'votre_mot_de_passe',
  database: 'bibliotheque'
});

module.exports = connection;
