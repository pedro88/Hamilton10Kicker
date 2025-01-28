import express from "express";
import dbInteract from "../dbInteract.js";

const db = new dbInteract();

const player = express.Router();
player.use(express.json());

//****ADD PLAYER*** */
player.post("/addPlayer", async (req, res) => {
    // get player name in body
    const pseudo = req.body.username;
    await db.newUser(pseudo);
    res.send(`It's okey ${pseudo}`);
});

//*****DISPLAY LEADERBOARD***** */
player.get("/playerList", async (req, res) => {
    const result = await db.getAllUsers();
    res.send(result);
});

//****DISPLAY PLAYER STATS**** */
player.get("/:playerID", async (req, res) => {});

export default player;
