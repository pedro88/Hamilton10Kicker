import express from "express";
import cors from "cors"; // Correct import for cors
import game from "./routes/game.js";
import player from "./routes/player.js";

const PORT = 30125; // Match the port in your client request

const app = express();
app.use(express.json());

// Use cors middleware with specific options
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use("/game", game);
app.use("/player", player);

// Add error handling
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// Bind to all network interfaces
app.listen(PORT, '0.0.0.0', () => 
    console.log(`Server running on port ${PORT}`)
);
