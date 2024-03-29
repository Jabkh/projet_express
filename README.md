
# Bibliothèque en Ligne

## Description du Projet

Le projet de la bibliothèque en ligne est une application web permettant aux utilisateurs de gérer une collection de livres, d'ajouter de nouveaux livres, de les emprunter et de les rendre. L'application suit l'architecture MVC (Modèle-Vue-Contrôleur) pour garantir une structure logique et maintenable.

## Technologies Utilisées

1. **Express.js** : Framework côté serveur basé sur Node.js, utilisé pour la gestion des routes, des contrôleurs et des middleware.

2. **Pug (Jade)** : Moteur de template pour la création de vues HTML de manière concise et élégante.

3. **MySQL** : Système de gestion de base de données relationnelles utilisé pour stocker les informations sur les livres, les utilisateurs et les emprunts.

## Structure du Projet


- **controllers**: Contient les contrôleurs pour chaque entité du modèle (livre, utilisateur, emprunt).
- **models**: Définit les modèles de données pour chaque entité du projet.
- **views**: Les vues Pug pour l'affichage des pages HTML.
- **public**: Fichiers statiques tels que les feuilles de style.
- **routes**: Gestion des routes de l'application.
- **app.js**: Le point d'entrée de l'application Express.
- **config.js**: Configuration de la base de données et d'autres paramètres.
- **package.json**: Fichier de configuration npm pour les dépendances du projet.

## Installation et Utilisation

1. Clonez le repository : `git clone https://github.com/Jabkh/projet_express.git`
2. Installez les dépendances : `npm install`
3. Configurez la base de données dans le fichier `config.js`.
4. Exécutez l'application : `node app.js` ou `npm start`

L'application sera accessible à l'adresse `http://localhost:3000`.
