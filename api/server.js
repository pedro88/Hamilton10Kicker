import express from "express";
import game from "./routes/game.js";
import player from "./routes/player.js";

const PORT = 3000;

const app = express();
app.use(express.json());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*"); // Utilise "*" ou ton domaine spécifique
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    next();
});


app.use("/", game);
app.use("/", player);

// app.get("/", async (req, res) => {
//     console.log('prout')
//     res.send({message: 'prout'})

//     })

// const playerRouter = require("./routes/player.js");
// app.use("/player", playerRouter);

app.listen(PORT, () =>
    console.log(`Server is running: http://localhost:${PORT}/`)
);
