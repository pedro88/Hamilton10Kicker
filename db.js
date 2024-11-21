const express = require('express');
const { MongoClient } = require('mongodb');

const app = express();
const port = 3000;

// URL de connexion de votre pod Webstrator
const uri = "mongodb://username:password@host:port";
const client = new MongoClient(uri);

let database, usersCollection;

// Connexion à la base de données
async function connectToDatabase() {
  try {
    await client.connect();
    console.log('Connecté à MongoDB');
    database = client.db('kicker_scores');
    usersCollection = database.collection('users');
  } catch (error) {
    console.error('Erreur de connexion:', error);
  }
}

// Route pour ajouter un utilisateur
app.post('/add-user', async (req, res) => {
  try {
    const user = { 
      username: 'joueur1', 
      score: 0 
    };
    const result = await usersCollection.insertOne(user);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Route pour récupérer les utilisateurs
app.get('/users', async (req, res) => {
  try {
    const users = await usersCollection.find().toArray();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Démarrage du serveur
app.listen(port, async () => {
  await connectToDatabase();
  console.log(`Serveur démarré sur http://localhost:${port}`);
});