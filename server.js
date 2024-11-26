const express = require('express')
const { Pool } = require('pg')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())

const pool = new Pool({
    user: 'votre_utilisateur',
    host: 'localhost',
    database: 'nom_de_votre_base',
    password: 'votre_mot_de_passe',
    port: 5432,
})

// Route pour récupérer tous les utilisateurs
app.get('/api/utilisateurs', async (req, res) => {
    try {
        const { rows } = await pool.query('SELECT * FROM utilisateurs')
        res.json(rows)
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
})

// Route pour ajouter un utilisateur
app.post('/api/utilisateurs', async (req, res) => {
    const { nom, email } = req.body
    try {
        const { rows } = await pool.query(
            'INSERT INTO utilisateurs (nom, email) VALUES ($1, $2) RETURNING *',
            [nom, email]
        )
        res.json(rows[0])
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
})

app.listen(3000, () => {
    console.log('Serveur démarré sur http://localhost:3000')
})