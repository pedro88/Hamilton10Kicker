// 5432

// Importation des bibliothèques nécessaires
const express = require('express'); // Framework pour créer un serveur HTTP
const bodyParser = require('body-parser'); // Middleware pour gérer les données envoyées au serveur
const cors = require('cors'); // Middleware pour autoriser les requêtes venant d'autres domaines
const { Client } = require('pg'); // Client pour interagir avec PostgreSQL

// Création de l'application Express
const app = express();
const PORT = 3000; // Définition du port sur lequel le serveur écoutera

// Configuration de la connexion à PostgreSQL
const client = new Client({
  user: 'postgres', // Nom d'utilisateur pour PostgreSQL
  host: 'localhost', // Adresse du serveur PostgreSQL (localhost si local)
  database: 'mydatabase', // Nom de la base de données
  password: 'mon_mdp', // Mot de passe PostgreSQL
  port: 5432, // Port par défaut de PostgreSQL
});

// Connexion au serveur PostgreSQL
client.connect()
  .then(() => console.log('Connecté à PostgreSQL')) // Message en cas de succès
  .catch(err => console.error('Erreur de connexion :', err)); // Affiche une erreur si la connexion échoue

// Ajout des middlewares à l'application Express
app.use(cors()); // Autorise les requêtes provenant d'un autre domaine ou port
app.use(bodyParser.json()); // Permet de traiter les données envoyées en JSON dans les requêtes

// Création d'un endpoint GET pour récupérer les utilisateurs
app.get('/users', async (req, res) => {
  try {
    // Requête SQL pour récupérer toutes les lignes de la table "users"
    const result = await client.query('SELECT * FROM users');
    res.json(result.rows); // Envoie les données récupérées en JSON au client (front-end)
  } catch (err) {
    // Si une erreur survient, affiche-la et retourne un code d'erreur au client
    console.error('Erreur lors de la récupération :', err);
    res.status(500).send('Erreur serveur'); // Réponse 500 pour indiquer un problème serveur
  }
});

// Démarrage du serveur Express
app.listen(PORT, () => {
  console.log(`Serveur lancé sur http://localhost:${PORT}`); // Message pour indiquer que le serveur est actif
});
